/** Site-wide SEO constants and helpers for Devctrl. */

export const SITE_URL = "https://devctrl.ai";
export const SITE_NAME = "Devctrl";
export const SITE_TWITTER = "@devctrlai";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export const DEFAULT_KEYWORDS = [
  "AI governance",
  "AI compliance",
  "EU AI Act",
  "DORA",
  "policy gateway",
  "AI agents",
  "regulated industries",
  "task-based access control",
  "AI audit logging",
  "Devctrl",
].join(", ");

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  image?: string;
  type?: string;
};

export function pageSeo({
  title,
  description,
  path,
  keywords = DEFAULT_KEYWORDS,
  image = DEFAULT_OG_IMAGE,
  type = "website",
}: PageSeoInput) {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:type", content: type },
      { property: "og:site_name", content: SITE_NAME },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
      { name: "twitter:site", content: SITE_TWITTER },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
