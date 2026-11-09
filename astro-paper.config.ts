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
  features: {
    lightAndDarkMode: true,
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/ImMayankGupta" },
    { name: "linkedin", url: "https://www.linkedin.com/in/immayankgupta/" },
    { name: "x", url: "https://x.com/ImMayankGupta" },
    { name: "mail", url: "mailto:mayankgupta654@gmail.com" },
    { name: "whatsapp", url: "https://wa.me/919716953459" },
  ],
});
