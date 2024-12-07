"use client"
import { useRouter } from "next/navigation"

export default function Projects() {
  const router = useRouter();
  return (
    <section className="mb-12 md:w-1/2 md:mx-auto md:px-0">
      <h1 className="md:text-5xl text-3xl text-center font-bold mb-6">Projects</h1>
      <p className="text-xl text-center mb-6">Currently, there are no public projects available!</p>
      <button
        type="button"
        onClick={() => { router.push("/") }}
        className="block w-1/2 bg-red-700 p-4 rounded-xl text-white font-bold text-xl mx-auto"
      >Return to Home</button>
    </section>
  )
}
