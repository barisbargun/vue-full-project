import type { Currencies } from "./currency";
import type { Languages } from "./languages";

export const siteConfig = {
  name: "yolcu360",
  description: "Yolcu360",
  slogan: "Araç Kiralamak Ne Kolaymış!",
  defaultLang: "tr" as Languages,
  defaultCurrency: "try" as Currencies,
  url: "https://www.yolcu360.com",
  // ogImage: "https://ui.shadcn.com/og.jpg",
  // links: {
  //   twitter: "https://twitter.com/shadcn",
  //   github: "https://github.com/shadcn-ui/ui",
  // },
}

export type SiteConfig = typeof siteConfig;