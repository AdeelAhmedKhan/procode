import Hero from "@/components/Hero";
import ServicesSection from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTASection from "@/components/sections/CTASection";
import Header from "@/components/Header";
import SuccessStories from "@/components/sections/SuccessStories";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative w-full">
     <Header/>
     <Hero 
     type="home"
      title='Automate Smarter'
      subtitle='Grow Faster'
      description='Unlock the full potential of your business with ProCode’s RPA and AI solutions.'
        primaryCtaText='Book a Free Discovery Call'
        primaryCtaLink='#'
        secondaryCtaText='See Case Studies'
        secondaryCtaLink='#'
        bgImageUrl='bg-particle.png'
        alignment= 'center'
     />
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

        {/* Text */}
        <p className="mx-auto max-w-3xl text-base md:text-lg leading-relaxed text-primary">
          Our automation expertise enables businesses like yours to streamline
          operations, enhance productivity, and drive significant cost savings.
          Whether you&apos;re looking to automate tedious workflows or harness the
          power of AI, we provide solutions that deliver measurable results.
        </p>

        {/* Bottom Separator */}
        <div className="mt-12 flex justify-center">
          <div className="h-px w-4xl bg-muted" />
        </div>
      </div>
    </section>
     <ServicesSection/>
     <WhyChooseUs/>
     <SuccessStories/>
     <CTASection/>
     <Footer/>
    </main>

  );
}
