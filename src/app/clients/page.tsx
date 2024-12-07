import ProjectStats from "@/components/StatsBar";
import ProjectItem from "@/components/ProjectItem";
import { SkillIcons } from "@/components/statics";

export default function Clients() {
  return (
    <section className="mb-12 md:w-1/2 md:mx-auto md:px-0">
      <h1 className="md:text-5xl text-3xl text-center font-bold mb-12">Clients</h1>
      <div className="mb-24">
        <ProjectItem
          projectName="LogiQ IT"
          skills={[SkillIcons.github, SkillIcons.neovim, SkillIcons.astro, SkillIcons.tailwind, SkillIcons.docker]}
          bgImage="logiqit.webp"
          href="https://logiqit.de" />
      </div>
      <ProjectStats stats={[{ name: "Visitor", value: 300000 }, { name: "User", value: 3000 }, { name: "Usage", value: 300 }]} />
      <div className="mb-8 mt-24">
        <ProjectItem
          projectName="Stimberg Physio"
          skills={[SkillIcons.github, SkillIcons.neovim, SkillIcons.svelte, SkillIcons.tailwind, SkillIcons.docker]}
          bgImage="stimberg.webp"
          href="https://stimberg.logiqit.de/"
        />
      </div>
      <div className="mb-8">
        <ProjectItem
          projectName="Bündnis Recklinghausen"
          skills={[SkillIcons.github, SkillIcons.neovim, SkillIcons.astro, SkillIcons.tailwind, SkillIcons.docker]}
          bgImage="buendnis.webp"
          href="https://buendnis-recklinghausen.de/"
        />
      </div>
      <div className="mb-8">
        <ProjectItem
          projectName="Marler Bestattungen"
          skills={[SkillIcons.github, SkillIcons.neovim, SkillIcons.svelte, SkillIcons.tailwind, SkillIcons.docker]}
          bgImage="bestattung.webp"
          href="https://www.marler-bestattungen.de/"
        />
      </div>



    </section>
  )
}
