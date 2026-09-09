import type {
  FooterConfig,
  LinkConfig,
  ProfileConfig,
  PublicationConfig,
  SiteConfig,
} from "@/types"

export const SITE: SiteConfig = {
  title: "Tariq Z. Jawad",
  description:
    "Portfolio of a Data Analyst and Data Engineer specializing in Python, PostgreSQL, and data visualization.",
  href: "https://my-portfolio-six-amber-96.vercel.app",
  author: "Tariq Z. Jawad",
  dir: "ltr",
  defaultPageImage: "/img/social-preview.png",
  defaultPostImage: "/img/social-preview.png",

  locale: {
    lang: "en-US",
    options: {
      day: "numeric",
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    },
  },

  // Table of contents depth shared by blog posts and project detail pages.
  tocMaxDepth: 3,

  blog: {
    featuredPostCount: 3,
    postsPerPage: 8,
    shareActions: ["x"],
  },

  home: {
    careerHighlightCount: 4,
    updateCount: 3,
    publicationCount: 3,
  },

  favicon: "/favicon.ico",
  prerender: true,
  npmCDN: "https://cdn.jsdelivr.net/npm",

  license: {
    label: "CC-BY-4.0",
    href: "https://creativecommons.org/licenses/by/4.0/",
  },
}

export const PROFILE: ProfileConfig = {
  name: SITE.title,
  tagline: "Data Analyst & Data Engineer",
  email: "tariq.z.jawad4@gmail.com",
  location: "Iraq",
  pronouns: "He/Him",
  links: {
    github: "https://github.com/TariqZJawad",
    linkedin: "https://www.linkedin.com/in/tariq-jawad?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    website: "https://my-portfolio-six-amber-96.vercel.app",
  },
  highlightLinks: ["github", "linkedin"],
  linksPlacement: {
    header: ["email", "github", "linkedin", "website"],
    about: false,
    footer: false,
  },
}

export const NAV_LINKS: LinkConfig[] = [
  { href: "/projects", label: "Projects" },
  { href: "/now", label: "Now" },
  { href: "/tech", label: "Tech" },
  { href: "/blog", label: "Blog" },
]

export const NAVIGATION: LinkConfig[] = NAV_LINKS.map(({ href, label }) => ({
  href,
  label,
}))

export const PUB_CONFIG: PublicationConfig = {
  maxFirstAuthors: 6,
  maxLastAuthors: 1,
  highlightAuthor: {
    firstName: "Tariq",
    lastName: "Jawad",
    aliases: ["T. Jawad", "Tariq Z. Jawad"],
  },
  equalSymbols: {
    first: "*",
    second: "†",
    third: "‡",
    last: "§",
  },
}

export const FOOTER: FooterConfig = {
  credits: true,
  sourceCode: "",
  sourceContent: "",
  footerLinks: [],
}

if (import.meta.env.DEV && typeof window === "undefined") {
  const {
    FooterConfigSchema,
    ProfileConfigSchema,
    PublicationConfigSchema,
    SiteConfigSchema,
  } = await import("@/schemas")
  SiteConfigSchema.parse(SITE)
  ProfileConfigSchema.parse(PROFILE)
  FooterConfigSchema.parse(FOOTER)
  PublicationConfigSchema.parse(PUB_CONFIG)
}
 
