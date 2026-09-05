interface SiteConfig {
  /** Deployed URL of the site, e.g. "https://example.com" */
  url: string;
  /** Site title shown in header and meta tags */
  title: string;
  /** Short description used in SEO meta */
  description: string;
  /** Author name */
  author: string;
  /** Author profile URL (used in structured data) */
  profile?: string;
  /** OG image filename in /public, e.g. "og.jpg" */
  ogImage?: string;
  /** HTML lang attribute, defaults to "en" */
  lang?: string;
  /** IANA timezone for dates, e.g. "Asia/Kolkata" */
  timezone?: string;
  /** Text direction */
  dir?: "ltr" | "rtl" | "auto";
  /** Google Search Console verification meta tag value */
  googleVerification?: string;
}

interface FeaturesConfig {
  /** Enable light/dark mode toggle. Defaults to true. */
  lightAndDarkMode?: boolean;
  /** Search provider. Set to false to disable search entirely. */
  search?: "pagefind" | false;
}

interface SocialLink {
  /** Must match an SVG filename in src/assets/icons/socials/. */
  name: string;
  url: string;
  /** Accessible label for the icon link. Auto-generated if omitted. */
  linkTitle?: string;
}

interface AstroPaperConfig {
  site: SiteConfig;
  features?: FeaturesConfig;
  /** Social profile links shown in header/footer */
  socials?: SocialLink[];
}

type ResolvedSiteConfig = Required<
  Pick<
    SiteConfig,
    | "url"
    | "title"
    | "description"
    | "author"
    | "lang"
    | "timezone"
    | "dir"
    | "ogImage"
  >
> &
  Pick<SiteConfig, "profile" | "googleVerification">;

export interface ResolvedAstroPaperConfig {
  site: ResolvedSiteConfig;
  features: Required<FeaturesConfig>;
  socials: SocialLink[];
}

/** Type helper for astro-paper.config.ts — provides IntelliSense with no runtime cost. */
export function defineAstroPaperConfig(
  config: AstroPaperConfig
): AstroPaperConfig {
  return config;
}
