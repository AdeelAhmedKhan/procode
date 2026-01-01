import Hero from "@/components/Hero";
import ServicesSection from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTASection from "@/components/sections/CTASection";
import Header from "@/components/Header";
import SuccessStories from "@/components/ContentImageSection";
import Image from "next/image";
import Footer from "@/components/Footer";
import { Award, ChartNoAxesCombinedIcon, Globe, LucideGitBranchPlus, Puzzle } from "lucide-react";
import ContentImageSection from "@/components/ContentImageSection";
import LetsTalkSection from "@/components/sections/LetsTalkSection";

export default function AboutPage() {

    const whyChooseUsCards=[
           {
      title: "Expert Team",
      description: "Our team of <strong>experienced</strong> developers brings decades of experience in RPA, AI, and enterprise software. We work closely with our clients to understand their unique challenges and deliver solutions that are effective and scalable.",
      icon: Award,
    },
           {
      title: "Tailored Solutions",
      description: "We don't believe in one-size-fits-all. Our solutions are crafted to meet the specific needs of your business.",
      icon: Puzzle,
    },
           {
      title: "Proven Expertise",
      description: "With years of experience in RPA and AI, we ensure your business stays ahead of the curve.",
      icon: ChartNoAxesCombinedIcon,
    },
    {
      title: "Global Reach, Local Expertise",
      description: "While we are headquartered in Dubai, our reach is global. We serve clients from the GCC, US, UK, and beyond, delivering international-grade solutions with a local understanding of market needs.",
      icon: Globe,
    },
    ]
  return (
    <main className="relative w-full">
      <Header />
      <Hero
        type="home"
        title="About"
        subtitle=""
        description="At ProCode, we specialize in empowering businesses with cutting-edge Robotic Process Automation (RPA) and Artificial Intelligence (AI) solutions, transforming the way companies operate."
        primaryCtaText="Read More"
        primaryCtaLink="#"
        secondaryCtaText=""
        secondaryCtaLink="#"
        bgImageUrl="bg-particle.png"
        alignment="left"
      />

      {/* intro */}
      <section className="py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary mx-auto max-w-3xl text-base leading-relaxed md:text-lg">
            Based in Dubai, we cater to clients across the <strong>GCC</strong>, <strong>US</strong>
            , and <strong>UK</strong>, providing innovative automation services that drive
            efficiency, productivity, and significant cost savings.
            <br /> <br />
            With a strong focus on delivering tailored, scalable solutions, ProCode helps
            organizations streamline operations, automate mundane tasks, and unlock the full
            potential of their workforce.
          </p>
          <hr className="bg-muted mx-auto mt-12 w-5xl" />
        </div>
      </section>

      {/* our mission */}
      <section className="py-10">
        <ContentImageSection
          title="Our Mission"
          description="At ProCode, our mission is simple: to help businesses achieve more with less. By leveraging the latest in RPA and AI technology, we enable our clients to automate repetitive processes, free up human resources for more strategic tasks, and save both time and money.<br><br> We believe that automation is not just about reducing manual work; it’s about enhancing business agility and ensuring that companies can thrive in today’s fast-evolving digital landscape."
          imageSrc="about/our-mission.png"
          imageAlt="Our Vision"
          reverse={true}
        />
      </section>

      {/* seperator */}
      <hr className="bg-muted mx-auto my-5 w-5xl" />

      {/* why choose us */}
      <section className="py-10">
        <WhyChooseUs description="" data={whyChooseUsCards} showCta={false} />
      </section>

      {/* seperator */}
      <hr className="bg-muted mx-auto my-5 w-5xl" />

      {/* vision */}
      <section className="mb-10 space-y-20 py-24">
        <ContentImageSection
          title="Our Vision"
          description="Our vision is to become a trusted global leader in automation solutions, helping companies of all sizes unlock new opportunities by leveraging the power of RPA and AI. We strive to make digital transformation accessible and valuable for every business."
          imageSrc="about/our-vision.png"
          imageAlt="Our Vision"
          showCTA={false}
        />
        <ContentImageSection
          title="Our Team"
          description="Though we operate globally, ProCode thrives on collaboration and expertise. Our team consists of experts from diverse backgrounds—RPA engineers, AI specialists, developers, PMs, and business consultants—united by a passion for transforming the way businesses work."
          imageSrc="about/our-team.png"
          imageAlt="Our Team"
          showCTA={false}
          reverse={true}
        />
      </section>

      {/* seperator */}
      <hr className="bg-muted mx-auto w-5xl" />

      <section className="py-24">
        <LetsTalkSection />
      </section>

      <Footer />
    </main>
  );
}
