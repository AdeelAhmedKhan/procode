import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function LetsTalkSection() {
  return (
    <section className="relative">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Top helper text */}
        <p className="mx-auto mb-24 max-w-3xl text-center text-sm text-primary/80">
          Together, we’ve delivered solutions across industries, helping our
          clients achieve measurable results while navigating their unique
          challenges.
        </p>

        {/* CARD */}
        <div className="relative rounded-2xl bg-white shadow-[0px_4px_30px_rgba(0,28,107,0.1)]">
          <div className="p-10 md:p-14 md:pr-64">
            {/* CONTENT */}
            <h2 className="text-3xl font-semibold tracking-tight text-primary">
              Let’s Talk
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-relaxed text-primary/80">
              Ready to explore how ProCode can help your business automate
              processes and achieve more with less? Book a Consultation or
              Contact Us to learn more about how our tailored RPA and AI
              solutions can drive transformation in your organization.
            </p>

            <div className="mt-6">
              <Button className="rounded-lg bg-cta px-6 py-5 text-sm font-medium hover:bg-cta/80">
                See Case Studies
              </Button>
            </div>
          </div>

          {/* ABSOLUTE IMAGE */}
          <div className="pointer-events-none absolute right-0 bottom-0 hidden md:block">
            <Image
              src="about/lets-talk.png"
              alt="Booking illustration"
              width={436}
              height={416}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
