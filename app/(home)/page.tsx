import Hero from "@/components/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Header from "@/components/Header";
import Image from "next/image";
import Footer from "@/components/Footer";
import { Award, Puzzle } from "lucide-react";
import ContentImageSection from "@/components/ContentImageSection";
import CTASection from "@/components/sections/CTASection";
import { services } from "@/data/services";
import { whyChooseUsHomeCards } from "@/data/whyChooseUs";

export default function HomePage() {
 

  return (
    <main className="relative w-full">
      <Header />

      {/* Main Hero */}
      <Hero
        type="home"
        title="Automate Smarter"
        subtitle="Grow Faster"
        description="Unlock the full potential of your business with ProCode’s RPA and AI solutions."
        primaryCtaText="Book a Free Discovery Call"
        primaryCtaLink="#"
        secondaryCtaText="See Case Studies"
        secondaryCtaLink="#"
        bgImageUrl="bg-particle.png"
        alignment="center"
      />

      {/* Intro */}
      <section className="py-10">
        <div className="container mx-auto px-4 text-center">
          {/* Top Separator Image */}
          <div className="mb-8 flex justify-center">
            <Image
              src="seperator.png" // replace with your separator image
              alt="Section Separator"
              width={900}
              height={100}
              className="object-contain"
            />
          </div>

          <p className="text-primary mx-auto max-w-3xl text-base leading-relaxed md:text-lg">
            Our automation expertise enables businesses like yours to streamline operations, enhance
            productivity, and drive significant cost savings. Whether you&apos;re looking to
            automate tedious workflows or harness the power of AI, we provide solutions that deliver
            measurable results.
          </p>

          {/* Bottom Separator */}
          <hr className="bg-muted mx-auto mt-12 w-4xl" />
        </div>
      </section>

      {/* Services */}
      <section className="py-10">
        <ServicesSection data={services} />
      </section>

      {/* Why Choose Us */}
      <section className="py-10">
        <WhyChooseUs
          description="With a track record of delivering exceptional automation and AI solutions, ProCode is
          committed to providing value to businesses worldwide. We serve clients across GCC, US, and
          UK markets, ensuring each solution is designed to address unique business challenges."
          data={whyChooseUsHomeCards}
        />
      </section>

      {/* Success Stories */}
      <section className="py-10">
        <ContentImageSection
          title="Success Stories"
          description="Our clients have seen remarkable improvements through RPA and AI implementation. By automating labor-intensive processes, they’ve reduced costs, increased operational efficiency, and empowered their teams to focus on innovation."
          highlightText="Read Our Success Stories to see how we've made an impact."
          imageSrc="home/success-stories.png"
          imageAlt="Success Stories"
          ctaText="Read More"
        />
      </section>

      {/* CTA */}
      <section className="pt-10">
        <CTASection />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
