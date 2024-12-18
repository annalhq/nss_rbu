import * as React from "react";

import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navMenuConfig } from "@/config/nav-menu";
import { Icons } from "@/icons";
import { cn } from "@/lib/utils";
import type { MenuItem } from "@/types";

export function MainNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navMenuConfig.links.map((link) => (
          <NavigationMenuItem key={link.href}>
            <a href={link.href} className={navigationMenuTriggerStyle()}>
              {link.title}
            </a>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem: React.FC<MenuItem> = ({
  title,
  href,
  description,
  launched,
  disabled,
  external,
}) => {
  const target = external ? "_blank" : undefined;

  return (
    <li>
      <a
        href={disabled ? undefined : href}
        target={target}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          disabled
            ? "text-muted-foreground hover:bg-transparent hover:text-muted-foreground"
            : "",
        )}
      >
        <div className="text-sm font-medium leading-none text-gradient_blaze-orange">
          <span className="mr-2">{title}</span>
          {disabled ? (
            <Badge
              variant="secondary"
              className="h-5 px-1.5 text-xs font-medium"
            >
              SOON
            </Badge>
          ) : null}
          {launched ? (
            <Badge className="h-5 px-1.5 text-xs font-medium">
              NEW
            </Badge>
          ) : null}
        </div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {description}
        </p>
      </a>
    </li>
  );
};
ListItem.displayName = "ListItem";
