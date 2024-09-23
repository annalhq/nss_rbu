import { memeberData } from "@/data";
import { convertLinksToObjects } from "@/lib/utils";
import type { TeamCardItem } from "@/types";
import { Fragment } from "react";
import TeamCard from "./cards/team-card";

export const LeadershipTeamGrid = () => {
  return (
    <>
      <div className="container -mx-3 my-6">
        <ul className="flex gap-8 w-full flex-wrap md:flex-nowrap">
          {memeberData.map(
            ({
              name,
              role,
              image,
              instagram,
              email,
              other,
              linkedin,
            }: TeamCardItem) => {
              const allLinks: Record<string, string> = {
                instagram: instagram || "",
                linkedin: linkedin || "",
                email: email || "",
                other: other || "",
              };

              const links = convertLinksToObjects(allLinks);

              return (
                <Fragment key={name}>
                  <TeamCard
                    name={name}
                    role={role}
                    image={image}
                    links={links}
                  />
                </Fragment>
              );
            },
          )}
        </ul>
      </div>
    </>
  );
};