import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// dependency for team card
export function convertLinksToObjects(allLinks: { [key: string]: string }) {
  const links: { key: string; value: string }[] = Object.entries(allLinks)
    .filter(([, value]) => value)
    .map(([key, value]) => ({ key, value: value ?? "" }));

  return links;
}
