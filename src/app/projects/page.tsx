import ProjectItem from "@/components/ProjectItem";
import { SkillIcons } from "@/components/statics";

export default function Projects() {
  const projectList = [
    {
      name: "UDE Video Library",
      skills: [
        SkillIcons.github,
        SkillIcons.neovim,
        SkillIcons.tailwind,
        SkillIcons.docker,
        SkillIcons.bash,
        SkillIcons.typescript,
      ],
      bgImage: "webtech.webp",
      href: "https://webtech.witzdam.com",
    },
  ];
  return (
    <section className="mb-12 md:w-1/2 md:mx-auto md:px-0">
      <h1 className="md:text-5xl text-3xl text-center font-bold mb-12">
        Projects
      </h1>
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
