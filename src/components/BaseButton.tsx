"use client"
import { useRouter } from "next/navigation"

interface Props {
  text: string
  href: string
  fullWidth?: boolean
  extraClass?: string
  before?: React.ReactNode
  after?: React.ReactNode
}

export default function(props: Props) {
  const router = useRouter()
  return (
    <button
      className={`md:text-xl py-2 px-6 inline-flex items-center bg-accent rounded-3xl text-white font-bold ${props.extraClass}`}
      style={{ width: (props.fullWidth ? "100%" : "") }}
      onClick={() => { router.push(props.href) }}
    >
      <div>{props.before}</div>
      <span className="px-2">{props.text}</span>
      <div>{props.after}</div>
    </button>
  )
}
