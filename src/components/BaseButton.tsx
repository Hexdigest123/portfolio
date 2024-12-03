"use client"
import { useRouter } from "next/navigation"

interface Props {
  text: string
  href: string
  fullWidth?: boolean
  extraClass?: string
}

export default function(props: Props) {
  const router = useRouter()
  return (
    <button
      className={`md:text-xl py-2 px-6 bg-accent rounded-3xl text-white font-bold ${props.extraClass}`}
      style={{ width: (props.fullWidth ? "100%" : "") }}
      onClick={() => { router.push(props.href) }}
    >{props.text}</button>
  )
}
