/**
 * Attaches a one-click copy button to all Shiki code blocks.
 * Supports Astro View Transitions via `astro:page-load`.
 */
function attachCopyButtons(): void {
  const codeBlocks = document.querySelectorAll<HTMLElement>("pre.astro-code");

  codeBlocks.forEach(codeBlock => {
    // Avoid duplicate buttons on re-render / transitions
    if (codeBlock.dataset.hasCopyButton === "true") return;
    codeBlock.dataset.hasCopyButton = "true";

    // Ensure relative positioning for absolute child placement
    if (getComputedStyle(codeBlock).position === "static") {
      codeBlock.style.position = "relative";
    }

    const button = document.createElement("button");
    button.type = "button";
    button.className =
      "copy-code-btn absolute top-2 right-2 flex items-center gap-1.5 px-2 py-1 text-xs font-mono rounded bg-muted/80 text-foreground/70 hover:bg-accent hover:text-accent-foreground border border-border shadow-sm backdrop-blur-sm transition-all opacity-70 hover:opacity-100 focus:opacity-100";
    button.setAttribute("aria-label", "Copy code to clipboard");
    button.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block pointer-events-none">
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
      </svg>
      <span class="copy-label">Copy</span>
    `;

    button.addEventListener("click", async () => {
      const codeElement = codeBlock.querySelector("code");
      const textToCopy = codeElement
        ? codeElement.innerText
        : codeBlock.innerText;

      try {
        await navigator.clipboard.writeText(textToCopy.trim());
        const label = button.querySelector<HTMLElement>(".copy-label");
        if (label) label.textContent = "Copied!";
        button.classList.add("border-accent", "text-accent");

        setTimeout(() => {
          if (label) label.textContent = "Copy";
          button.classList.remove("border-accent", "text-accent");
        }, 2000);
      } catch {
        // Fallback or ignore clipboard errors
      }
    });

    codeBlock.appendChild(button);
  });
}

// Initial attachment
attachCopyButtons();

// Re-attach after Astro View Transitions
document.addEventListener("astro:page-load", attachCopyButtons);
