import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  infosNav: [], // Remove the "Directory" section

  links: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "FAQ",
      href: "/faq",
    },
    {
      title: "Sponsor",
      href: "/sponsor",
    },
  ],
};
