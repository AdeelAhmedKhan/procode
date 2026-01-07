import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="relative overflow-hidden  pt-24 text-white ">
    

      {/* Content */}
      <div className="bg-cta py-10">
          {/* Background Image (half visible) */}
      <div className="pointer-events-none absolute left-1/2 top-0 w-full -translate-x-1/2 -translate-y-1 ">
        <Image
          src="home/cta-bg.png" // use a soft abstract image or pattern
          alt="Background Pattern"
          width={700}
          height={700}
          className="bg-cover w-full"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center ">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Unlock Your Business&apos;s Potential
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-white/90 leading-relaxed">
          If you&apos;re ready to boost efficiency, cut operational costs, and
          harness the power of AI, our team is here to guide you through your
          automation journey.
        </p>

        <div className="mt-10">
          <Button
            size="lg"
            variant="secondary"
            className="px-8"
          >
            Book a Free Discovery Call
          </Button>
        </div>
      </div>

      </div>
    </section>
  )
}
