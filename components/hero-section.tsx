import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-b from-background to-muted">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Build Your Perfect Resume with AI
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Create professional, ATS-optimized resumes in minutes with our AI-powered platform. Stand out to
                employers and land your dream job.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/dashboard">
                <Button size="lg" className="px-8">
                  Get Started
                </Button>
              </Link>
              <Link href="#templates">
                <Button size="lg" variant="outline" className="px-8">
                  View Templates
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[500px] aspect-[4/5] overflow-hidden rounded-xl border bg-background shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
                <div className="absolute inset-0 bg-white/80 dark:bg-black/80">
                  <div className="p-8">
                    <div className="h-6 w-24 rounded-md bg-gray-200 dark:bg-gray-800 mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-4 w-full rounded-md bg-gray-200 dark:bg-gray-800"></div>
                      <div className="h-4 w-3/4 rounded-md bg-gray-200 dark:bg-gray-800"></div>
                    </div>
                    <div className="mt-6">
                      <div className="h-5 w-32 rounded-md bg-gray-200 dark:bg-gray-800 mb-4"></div>
                      <div className="space-y-2">
                        <div className="h-4 w-full rounded-md bg-gray-200 dark:bg-gray-800"></div>
                        <div className="h-4 w-full rounded-md bg-gray-200 dark:bg-gray-800"></div>
                        <div className="h-4 w-2/3 rounded-md bg-gray-200 dark:bg-gray-800"></div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <div className="h-5 w-32 rounded-md bg-gray-200 dark:bg-gray-800 mb-4"></div>
                      <div className="space-y-2">
                        <div className="h-4 w-full rounded-md bg-gray-200 dark:bg-gray-800"></div>
                        <div className="h-4 w-full rounded-md bg-gray-200 dark:bg-gray-800"></div>
                        <div className="h-4 w-3/4 rounded-md bg-gray-200 dark:bg-gray-800"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-8 right-8">
                      <div className="h-10 w-10 rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

