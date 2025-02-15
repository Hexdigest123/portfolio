import ProjectStats from "@/components/StatsBar";
import ProjectItem from "@/components/ProjectItem";
import { SkillIcons } from "@/components/statics";

export default function Clients() {
  const projectList = [
    {
      name: "LogiQ IT",
      skills: [
        SkillIcons.github,
        SkillIcons.neovim,
        SkillIcons.astro,
        SkillIcons.tailwind,
        SkillIcons.docker,
      ],
      bgImage: "logiqit.webp",
      href: "https://logiqit.de",
    },
    {
      name: "Stimberg Physio",
      skills: [
        SkillIcons.github,
        SkillIcons.neovim,
        SkillIcons.svelte,
        SkillIcons.tailwind,
        SkillIcons.docker,
      ],
      bgImage: "stimberg.webp",
      href: "https://stimberg.logiqit.de/",
    },
    {
      name: "Bündnis Recklinghausen",
      skills: [
        SkillIcons.github,
        SkillIcons.neovim,
        SkillIcons.astro,
        SkillIcons.tailwind,
        SkillIcons.docker,
      ],
      bgImage: "buendnis.webp",
      href: "https://buendnis-recklinghausen.de/",
    },
    {
      name: "Marler Bestattungen",
      skills: [
        SkillIcons.github,
        SkillIcons.neovim,
        SkillIcons.svelte,
        SkillIcons.tailwind,
        SkillIcons.docker,
      ],
      bgImage: "bestattung.webp",
      href: "https://www.marler-bestattungen.de/",
    },
  ];
  return (
    <section className="mb-12 md:w-1/2 md:mx-auto md:px-0">
      <h1 className="md:text-5xl text-3xl text-center font-bold mb-12">
        Clients
      </h1>
      <div className="mb-24">
        <ProjectStats
          stats={[
            { name: "Unique Visitor", value: 100000 },
            { name: "Active User", value: 1000 },
          ]}
        />
      </div>

      {projectList.map((project) => {
        return (
          <div className="mb-8">
            <ProjectItem
              projectName={project.name}
              skills={project.skills}
              href={project.href}
              bgImage={project.bgImage}
            ></ProjectItem>
          </div>
        );
      })}
    </section>
  );
}
