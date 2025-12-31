import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bot, Cpu, FileText } from "lucide-react"
import ServiceCard from "../ServiceCard"

const services = [
  {
    title: "RPA Solutions",
    description:
      "Automate repetitive tasks to save time and reduce errors.",
    icon: Bot,
    accent: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "AI Integration",
    description:
      "Leverage advanced AI for smarter decision-making, predictive analytics, and enhanced customer interactions.",
    icon: Cpu,
    accent: "bg-green-100 text-green-600",
  },
  {
    title: "Document Processing & RAG",
    description:
      "Automate document handling and retrieval with AI, boosting efficiency and accuracy.",
    icon: FileText,
    accent: "bg-purple-100 text-purple-600",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4 text-center">
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
          {services.map((service) => (
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
