import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalizeFirstLetter(sentence: string): string {
  if (!sentence) return '';
  return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
}