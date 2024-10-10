import { type ClassValue } from "clsx";

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $cn: (...inputs: ClassValue[]) => string;
  }
}

export { }