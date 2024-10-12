 "use client"
import react from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex h-[75vh] flex-col items-center justify-center bg-background px-4  sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Oops, something went wrong!
        </h1>
        <p className="mt-4 text-muted-foreground">
          We're sorry, but an unexpected error has occurred. Please try again later or contact support if the issue
          persists.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 ">
          <ArrowLeft size={20}/>
          <Link
            href="/"
           variant="outline"
            prefetch={false}
            className=""
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}