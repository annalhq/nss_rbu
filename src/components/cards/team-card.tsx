import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { TeamCardItem } from "@/types";
import { InstagramIcon, LinkedinIcon, MailIcon } from "lucide-react";

interface TeamCardProps extends TeamCardItem {
  links: { key: string; value: string }[];
}

export default function TeamCard({
  name,
  role,
  image,
  links,
}: TeamCardProps) {
  return (
    <>
      <Card
        className={cn(
          "group flex flex-col w-full md:w-72 group/item transition-all",
        )}
      >
        <CardHeader>
          <div className="relative flex flex-row justify-center gap-4">
            <img
              src={image}
              alt={name}
              className="rounded-md mx-auto"
              width={300}
              height={200}
            />
          </div>
        </CardHeader>
        <CardContent className="flex flex-col justify-center mx-auto text-md text-center">
          <CardTitle className="text-xl font-medium">{name}</CardTitle>
          <CardDescription className="text-orange-600 font-sans text-sm">
            {role}
          </CardDescription>
          <div className="flex justify-center space-x-4 mt-4">
            {links.map(({ key, value }) => {
              const IconComponent = key === "instagram" ? InstagramIcon : key === "linkedin" ? LinkedinIcon : MailIcon;
              return (
                <a
                  key={key}
                  href={value}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-orange-600"
                >
                  <IconComponent className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </>
  );
}