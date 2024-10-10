import assets from "@/assets";
import { CallCenterIcon } from "@/components/icons";
import type { Component } from "vue";

export type LinksConfig = {
  href: string;
  img?: string | Component;
  alt?: string;
  text?: string;
}

export type LinksFooterConfig = {
  title: string;
  links: LinksConfig[];
}

export const linksConfig = {
  mobileApp: [
    {
      href: "https://apps.apple.com/us/app/yolcu360-car-rental/id1331933613",
      img: assets.brands.appStore,
      alt: "App Store"
    },
    {
      href: "https://play.google.com/store/apps/details?id=com.yolcu360",
      img: assets.brands.googlePlay,
      alt: "Google Play"
    },
    {
      href: "https://appgallery.huawei.com/#/app/C102881793",
      img: assets.brands.appGallery,
      alt: "App Gallery"
    }
  ] as LinksConfig[],
  social: [
    {
      href: "https://www.facebook.com/yolcu360/",
      img: assets.brands.facebook,
      alt: "facebook"
    },
    {
      href: "https://x.com/yolcu360",
      img: assets.brands.twitter,
      alt: "twitter"
    },
    {
      href: "https://www.linkedin.com/company/yolcu-360/",
      img: assets.brands.linkedin,
      alt: "linkedin"
    },
    {
      href: "https://www.youtube.com/@Yolcu360",
      img: assets.brands.youtube,
      alt: "youtube"
    },
    {
      href: "https://www.instagram.com/yolcu360/",
      img: assets.brands.instagram,
      alt: "instagram"
    }
  ] as LinksConfig[],
  footer: [
    {
      title: "Araç Kiralama",
      links: [
        {
          href: "https://yolcu360.com/sirketler",
          text: "Araç Kiralama Şirketleri",
        },
        {
          href: "https://yolcu360.com/sirketler",
          text: "Araç Kiralama Şirketleri",
        },
        {
          href: "https://yolcu360.com/sirketler",
          text: "Araç Kiralama Şirketleri",
        },
        {
          href: "https://yolcu360.com/sirketler",
          text: "Araç Kiralama Şirketleri",
        }
      ]
    },
    {
      title: "Popüler Lokasyonlar",
      links: [
        {
          href: "https://yolcu360.com/sirketler",
          text: "İstanbul Araç Kiralama",
        },
        {
          href: "https://yolcu360.com/sirketler",
          text: "İstanbul Araç Kiralama",
        },
        {
          href: "https://yolcu360.com/sirketler",
          text: "İstanbul Araç Kiralama",
        },
        {
          href: "https://yolcu360.com/sirketler",
          text: "İstanbul Araç Kiralama",
        },
        {
          href: "https://yolcu360.com/sirketler",
          text: "İstanbul Araç Kiralama",
        },
        {
          href: "https://yolcu360.com/sirketler",
          text: "İstanbul Araç Kiralama",
        },
        {
          href: "https://yolcu360.com/sirketler",
          text: "İstanbul Araç Kiralama",
        },
        {
          href: "https://yolcu360.com/sirketler",
          text: "İstanbul Araç Kiralama",
        },
        {
          href: "https://yolcu360.com/sirketler",
          text: "İstanbul Araç Kiralama",
        },
        {
          href: "https://yolcu360.com/sirketler",
          text: "İstanbul Araç Kiralama",
        }
      ]
    },
    {
      title: "Popüler Araç Kiralama Şirketleri",
      links: [
        {
          href: "https://yolcu360.com/sirketler",
          text: "Avis Rent a Car",
        },
        {
          href: "https://yolcu360.com/sirketler",
          text: "Avis Rent a Car",
        },
        {
          href: "https://yolcu360.com/sirketler",
          text: "Avis Rent a Car",
        },
        {
          href: "https://yolcu360.com/sirketler",
          text: "Avis Rent a Car",
        },
        {
          href: "https://yolcu360.com/sirketler",
          text: "Avis Rent a Car",
        },
        {
          href: "https://yolcu360.com/sirketler",
          text: "Avis Rent a Car",
        },
        {
          href: "https://yolcu360.com/sirketler",
          text: "Avis Rent a Car",
        },
        {
          href: "https://yolcu360.com/sirketler",
          text: "Avis Rent a Car",
        },
        {
          href: "https://yolcu360.com/sirketler",
          text: "Avis Rent a Car",
        },
        {
          href: "https://yolcu360.com/sirketler",
          text: "Avis Rent a Car",
        }
      ]
    },
    {
      title: "Uçak Bileti",
      links: [
        {
          href: "https://yolcu360.com/sirketler",
          text: "İstanbul Uçak Bileti",
        },
        {
          href: "https://yolcu360.com/sirketler",
          text: "İstanbul Uçak Bileti",
        },
        {
          href: "https://yolcu360.com/sirketler",
          text: "İstanbul Uçak Bileti",
        },
        {
          href: "https://yolcu360.com/sirketler",
          text: "İstanbul Uçak Bileti",
        },
        {
          href: "https://yolcu360.com/sirketler",
          text: "İstanbul Uçak Bileti",
        },
        {
          href: "https://yolcu360.com/sirketler",
          text: "İstanbul Uçak Bileti",
        },
        {
          href: "https://yolcu360.com/sirketler",
          text: "İstanbul Uçak Bileti",
        },
        {
          href: "https://yolcu360.com/sirketler",
          text: "İstanbul Uçak Bileti",
        },
        {
          href: "https://yolcu360.com/sirketler",
          text: "İstanbul Uçak Bileti",
        },
        {
          href: "https://yolcu360.com/sirketler",
          text: "İstanbul Uçak Bileti",
        }
      ]
    },
    {
      title: "Kurumsal & Destek",
      links: [
        {
          href: "https://yolcu360.com/sirketler",
          text: "Hakkımızda",
        },
        {
          href: "https://yolcu360.com/sirketler",
          text: "Hakkımızda",
        },
        {
          href: "https://yolcu360.com/sirketler",
          text: "Hakkımızda",
        },
        {
          href: "https://yolcu360.com/sirketler",
          text: "Hakkımızda",
        },
        {
          href: "tel:0850 360 5 360",
          text: "0850 360 5 360",
          img: CallCenterIcon
        },
        {
          href: "info@yolcu360.com",
          text: "info@yolcu360.com",
          img: assets.others.envelope
        }
      ]
    },
  ] as LinksFooterConfig[]
}