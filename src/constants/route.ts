import { PhoneCallIcon } from "@/components/icons";
import { HelperObjectKeyToKey } from "@/utils/object";
import type { Component } from "vue";

export type RoutePaths = 'home' | 'campaign';

export interface RouteConfig {
  title: string;
  path: string;
  icon?: string | Component;
}

export const routeConfig: Record<RoutePaths, RouteConfig> = {
  home: {
    title: "Ana sayfa",
    path: "/",
    icon: PhoneCallIcon,
  },
  campaign: {
    title: "Kampanya",
    path: "kampanya",
    icon: PhoneCallIcon,
  },
};

export const routeNames = HelperObjectKeyToKey<RoutePaths>(routeConfig);