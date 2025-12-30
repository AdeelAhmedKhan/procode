import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Puzzle } from "lucide-react"
import FeatureCard from "../FeatureCard"

export default function WhyChooseUs() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl tracking-tight text-primary">
          Why Choose Us?
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
          With a track record of delivering exceptional automation and AI
          solutions, ProCode is committed to providing value to businesses
          worldwide. We serve clients across GCC, US, and UK markets, ensuring
          each solution is designed to address unique business challenges.
        </p>

        {/* Cards */}
        <div className="mt-14 flex justify-center gap-8 ">
          {/* Card 1 */}

          <FeatureCard
            title="Proven Expertise"
            description="With years of experience in RPA and AI, we ensure your business stays ahead of the curve."
            Icon={Award}
          />
       

          {/* Card 2 */}

          <FeatureCard
            title="Tailored Solutions"
            description="We design automation solutions that are customized to your business needs and scalable to grow with your organization."
            Icon={Puzzle}
          />
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-sm text-muted-foreground">
            Schedule a free consultation to learn more about how we can help
            your business evolve.
          </p>

          <Button className="mt-4 rounded-full px-8">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  )
}
