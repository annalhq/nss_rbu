import type { NavMenuConfig } from "@/types";
import { siteConfig } from "@/config/site";

export const navMenuConfig: NavMenuConfig = {
  infosNav: [], 

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
      title: "Team",
      href: "/team",
    },
  ],
};
