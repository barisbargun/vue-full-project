import assets from "./assets";

export type Languages = "en" | "en2" | "en3" | "en4" | "en5" | "en6" | "en7" | "es" | "es2" | "es3" | "es4" | "es5" | "es6" | "tr";

export type LanguageConfig = {
  [key in Languages]: {
    img: string;
    name: string;
    url: {
      base: string;
      param?: string;
    };
  };
};

const sites = [
  "Bookcars.com",
  "Yolcu360.com"
]

export const languageConfig: LanguageConfig = {
  en: {
    img: assets.languagesTrIcon,
    name: "English",
    url: {
      base: sites[0],
      param: "en"
    }
  },
  es: {
    img: assets.languagesTrIcon,
    name: "Español",
    url: {
      base: sites[0],
      param: "es"
    }
  },
  en2: {
    img: assets.languagesTrIcon,
    name: "English",
    url: {
      base: sites[0],
      param: "en"
    }
  },
  es2: {
    img: assets.languagesTrIcon,
    name: "Español",
    url: {
      base: sites[0],
      param: "es"
    }
  },
  en3: {
    img: assets.languagesTrIcon,
    name: "English",
    url: {
      base: sites[0],
      param: "en"
    }
  },
  es3: {
    img: assets.languagesTrIcon,
    name: "Español",
    url: {
      base: sites[0],
      param: "es"
    }
  },
  en4: {
    img: assets.languagesTrIcon,
    name: "English",
    url: {
      base: sites[0],
      param: "en"
    }
  },
  es4: {
    img: assets.languagesTrIcon,
    name: "Español",
    url: {
      base: sites[0],
      param: "es"
    }
  },
  en5: {
    img: assets.languagesTrIcon,
    name: "English",
    url: {
      base: sites[0],
      param: "en"
    }
  },
  es5: {
    img: assets.languagesTrIcon,
    name: "Español",
    url: {
      base: sites[0],
      param: "es"
    }
  },
  en6: {
    img: assets.languagesTrIcon,
    name: "English",
    url: {
      base: sites[0],
      param: "en"
    }
  },
  es6: {
    img: assets.languagesTrIcon,
    name: "Español",
    url: {
      base: sites[0],
      param: "es"
    }
  },
  en7: {
    img: assets.languagesTrIcon,
    name: "English",
    url: {
      base: sites[0],
      param: "en"
    }
  },
  tr: {
    img: assets.languagesTrIcon,
    name: "Türkçe",
    url: {
      base: sites[1],
    }
  }
}