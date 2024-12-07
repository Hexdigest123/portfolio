import WorkItem from "@/components/WorkItem"
import { WORK_PLACES } from "@/components/statics"

export default function Work() {
  const workPlaces = WORK_PLACES.map((work, index) => {
    return (
      <WorkItem title={work.title} company={work.company} duration={work.duration} href={work.href} key={index} />
    )
  })

  return (
    <section className="mb-12 md:w-1/2 md:mx-auto md:px-0">
      <h1 className="md:text-5xl text-3xl text-center font-bold mb-6">Work</h1>
      {workPlaces}
    </section>
  )
}
