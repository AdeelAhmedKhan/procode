import Image from "next/image";
import { Button } from "../ui/button";

export default function ContactCtaSection() {
  return (
    <section className="relative overflow-hidden py-20 max-w-5xl mx-auto">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Top Text */}
        <div className="mb-16 max-w-xl">
          <h2 className="text-5xl text-primary">
            Get in Touch <br />
            <span className="text-blue-700">with ProCode</span>
          </h2>

          <p className="mt-4 text-2xl  text-primary">
            We’re here to help you explore how RPA and AI can transform your
            business.
          </p>

          <p className="mt-2 text-sm text-primary/80">
            Whether you’re interested in learning more about our services,
            booking a consultation, or just have some questions, we’d love to
            hear from you!
          </p>
        </div>

        {/* CTA Card */}
        <div className="relative flex flex-col items-start gap-10 rounded-2xl bg-gradient-to-r from-blue-800 to-indigo-700 p-10 md:flex-row md:items-center">
          {/* Text */}
          <div className="max-w-xl text-white">
            <h3 className="text-3xl font-semibold">
              Book a Free Consultation
            </h3>

            <p className="mt-4 text-white/90">
              Looking to discuss how automation can benefit your business?
            </p>

            <p className="my-4 text-sm text-white/80">
              Schedule a free consultation with our experts to explore tailored
              solutions that meet your unique needs.
            </p>

            <Button variant="secondary" >
              Book Now
            </Button>
          </div>

          {/* Phone Image */}
          <div className=" w-full md:w-auto">
            <Image
              src="contact/calendly-mobile.png" 
              alt="Calendly Booking"
              width={190}
              height={500}
              className="mx-auto md:absolute md:right-16 md:-top-20"
            />
          </div>

          {/* Decorative text */}
          <span className="pointer-events-none absolute bottom-3 right-65 text-6xl font-bold ">
            <Image
              src="contact/logo-highlight.png" 
              alt="Calendly Booking"
              width={150}
              height={150}
            />
          </span>
        </div>
      </div>
    </section>
  );
}
