import assets from "../assets/index.js";

export type Languages = "en" | "en2" | "en3" | "es" | "es2" | "es3" | "tr";

export type LanguageConfig = {
  key: Languages;
  img: string;
  name: string;
  url: {
    base: string;
    param?: string;
  };
};

const sites = [
  "Bookcars.com",
  "Yolcu360.com"
]

export const languageConfig: LanguageConfig[] = [
  {
    key: "en",
    img: assets.icons.languagesTrIcon,
    name: "English",
    url: {
      base: sites[0],
      param: "en"
    }
  },
  {
    key: "es",
    img: assets.icons.languagesTrIcon,
    name: "Español",
    url: {
      base: sites[0],
      param: "es"
    }
  },
  {
    key: "en2",
    img: assets.icons.languagesTrIcon,
    name: "English",
    url: {
      base: sites[0],
      param: "en"
    }
  },
  {
    key: "es2",
    img: assets.icons.languagesTrIcon,
    name: "Español",
    url: {
      base: sites[0],
      param: "es"
    }
  },
  {
    key: "en3",
    img: assets.icons.languagesTrIcon,
    name: "English",
    url: {
      base: sites[0],
      param: "en"
    }
  },
  {
    key: "es3",
    img: assets.icons.languagesTrIcon,
    name: "Español",
    url: {
      base: sites[0],
      param: "es"
    }
  },
  {
    key: "tr",
    img: assets.icons.languagesTrIcon,
    name: "Türkçe",
    url: {
      base: sites[1],
    }
  }
]
