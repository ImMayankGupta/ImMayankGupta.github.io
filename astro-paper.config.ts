import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://immayankgupta.github.io/",
    title: "ImMayank",
    description:
      "Automation frameworks, developer resources, and interview prep — under the TestWithAI umbrella.",
    author: "Mayank Gupta",
    profile: "https://github.com/ImMayankGupta",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Kolkata",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/ImMayankGupta" },
    { name: "linkedin", url: "https://www.linkedin.com/in/immayankgupta/" },
    { name: "x", url: "https://x.com/ImMayankGupta" },
    { name: "mail", url: "mailto:hello@immayank.dev" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "linkedin", url: "https://www.linkedin.com/sharing/share-offsite/?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});