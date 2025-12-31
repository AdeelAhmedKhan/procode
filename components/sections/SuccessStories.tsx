import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function SuccessStories() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl tracking-tight text-primary">
              Success Stories
            </h2>

            <p className="mt-6 text-primary leading-relaxed">
              Our clients have seen remarkable improvements through RPA and AI
              implementation. By automating labor-intensive processes, they’ve
              reduced costs, increased operational efficiency, and empowered
              their teams to focus on innovation.
            </p>

            <p className="mt-4 font-semibold text-primary">
              Read Our Success Stories to see how we&apos;ve made an impact.
            </p>

            <div className="mt-8">
              <Button className="rounded-full px-8">
                Read More
              </Button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/home/success-stories.png" // replace with your image
                alt="Success Stories"
                width={600}
                height={420}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
