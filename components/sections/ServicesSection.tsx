import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ServiceCard from "../ServiceCard"
import type { Service } from "@/lib/types/Services"

export default function ServicesSection({data}:{data:Service[]}) {
  return (
    <section className="py-10">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl text-primary">
          Transform Your Business
          <br />
          <span>with RPA & AI</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-primary">
          At ProCode, we offer tailored Robotic Process Automation (RPA) and
          Artificial Intelligence (AI) solutions to help your business stay
          competitive. Our goal is to simplify complex processes, allowing your
          team to focus on what matters most.
        </p>

        {/* CTA */}
        <div className="mt-8">
          <Button className="px-8">
            Book a Free Discovery Call
          </Button>
        </div>

        {/* Badge */}
        <div className="mt-6 flex justify-center">
          <Badge className="rounded-full bg-highlight text-primary">
            Services
          </Badge>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {data.map((service) => (
            <ServiceCard 
            key={service.title}
            item={service} 
          
              />
          ))}
        </div>
      </div>
    </section>
  )
}
