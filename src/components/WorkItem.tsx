import Link from "next/link"

interface Props {
  title: string
  company: string
  duration: string
  href: string
}

export default function(props: Props) {
  return (
    <Link className="mx-auto text-center" href={props.href}>
      <p className="text-xl font-bold">{props.title}</p>
      <p>{props.company}</p>
      <p>{props.duration}</p>
      <div className="w-10 h-1 bg-black mx-auto my-8 rounded"></div>
    </Link>
  )
}
