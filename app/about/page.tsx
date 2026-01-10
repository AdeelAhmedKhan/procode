import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContentImageSection from '@/components/ContentImageSection';
import LetsTalkSection from '@/components/sections/LetsTalkSection';
import { whyChooseUsCards } from '@/data/whyChooseUs';
import { Separator } from '@/components/ui/separator';

export default function AboutPage() {
  return (
    <main className="relative w-full">
         <div
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(about/bg-particle-hero.png)` }}
      >

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
        bgImageUrl=""
        alignment="left"
      />
      </div>

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
        </div>
      </section>

      <Separator className=" mt-12" />
      {/* our mission */}
      <section className="mx-auto max-w-5xl py-10">
        <ContentImageSection
          title="Our Mission"
          description="At ProCode, our mission is simple: to help businesses achieve more with less. By leveraging the latest in RPA and AI technology, we enable our clients to automate repetitive processes, free up human resources for more strategic tasks, and save both time and money.<br><br> We believe that automation is not just about reducing manual work; it’s about enhancing business agility and ensuring that companies can thrive in today’s fast-evolving digital landscape."
          imageSrc="about/our-mission.png"
          imageAlt="Our Vision"
          reverse={true}
        />
      </section>

      {/* seperator */}
      <Separator className=" mt-15" />

      {/* why choose us */}
      <section className="mx-auto max-w-5xl py-10">
        <WhyChooseUs description="" data={whyChooseUsCards} showCta={false} />
      </section>

      {/* seperator */}
      <Separator className="mt-15 mb-5" />

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
      <Separator />

      <section className="py-24">
        <LetsTalkSection />
      </section>

      <Footer />
    </main>
  );
}
