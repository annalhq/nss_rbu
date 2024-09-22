import type { NavMenuConfig } from "@/types";
import { siteConfig } from "@/config/site";

export const navMenuConfig: NavMenuConfig = {
  infosNav: [], 

  links: [
    {
      title: "Events",
      href: "/events",
    },
    {
      title: "Team",
      href: "/team",
    },
    {
      title: "About",
      href: "/about",
    },
  ],
};
