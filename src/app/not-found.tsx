"use client"
import { useRouter, usePathname } from "next/navigation"

export default function NotFound() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="flex justify-center items-center flex-col h-3/4">
      <h2 className="text-red-700 font-bold text-5xl text-center mb-8">404 - Not Found</h2>
      <p className="text-xl text-center mb-8 w-2/3">You're requested path '{pathname}' was not found!</p>
      <button
        type="button"
        onClick={() => { router.push("/") }}
        className="block w-1/2 md:w-1/6 bg-red-700 p-4 rounded-xl text-white font-bold text-xl"
      >Return too Home</button>
    </div>
  )
}
