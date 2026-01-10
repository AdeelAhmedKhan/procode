import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Atom, Bot, ScanQrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { aiData, documentProcessingData, robotAutomationData } from '@/data/services';
import { Separator } from '@/components/ui/separator';

export default function AboutPage() {
  return (
    <main className="relative w-full">
      <div
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(services/bg-particle-hero.png)` }}
      >
        <Header />
        <Hero
          type="services"
          title="Our Services"
          subtitle="Driving Business Transformation through RPA & AI"
          description=""
          primaryCtaText="See Our Services"
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
            At <strong>ProCode</strong>, we offer a wide array of <strong>RPA</strong> and{' '}
            <strong>AI</strong> services designed to transform your business. Our solutions focus on
            automating key processes, leveraging AI for innovation, and delivering measurable
            outcomes. Whether you’re just starting with automation or seeking advanced AI
            capabilities, we’re here to help you streamline operations, reduce costs, and achieve
            your strategic goals.
          </p>
          <Separator className="mt-12" />
        </div>
      </section>

      {/* our services */}
      <section className="container mx-auto space-y-20 py-10">
        <Services
          type="multiList"
          badgeIcon={<Bot />}
          title="Robotic Process Automation (RPA)"
          description="Our RPA solutions automate repetitive tasks, increase operational efficiency, and reduce human errors, allowing your team to focus on high-value activities. We work across industries including manufacturing, supply chain, healthcare, retail, and more."
          tagLine="How RPA benefit your business?"
          services={robotAutomationData}
          footNote="RPA is ideal for automating structured and rule-based tasks that can be replicated in digital systems, making your operations more efficient and cost-effective."
          bulletColor="bg-linear-to-b from-[#FFE28D] to-[#FFF2C9]"
          bgColor="bg-linear-to-b from-[#FFE28D] to-[#FFF2C9]"
        />

        <Services
          type="singleList"
          badgeIcon={<Atom />}
          title="AI Integration"
          description="Artificial Intelligence is transforming business landscapes, and our AI solutions are built to give you a competitive edge. Whether it’s optimizing workflows or enhancing decision-making, our AI services help you get more out of your existing processes."
          tagLine="Key AI Solutions We Offer"
          services={aiData}
          footNote="The AI landscape is evolving rapidly, and the services we offer evolve with it. If you have other AI-related tasks or projects, don’t hesitate to reach out to us, and we'll explore how we can assist you."
          bulletColor="bg-linear-to-b from-[#C9FBC0] to-[#71F9F0]"
          bgColor="bg-linear-to-b from-[#C9FBC0] to-[#71F9F0]"
        />

        <Services
          type="iconList"
          badgeIcon={<ScanQrCode />}
          title="Document Processing & RAG"
          description="Our consulting services help you identify the right RPA and AI solutions tailored to your business challenges. We guide you through the automation process, from initial assessment to successful implementation, ensuring that your investment delivers maximum value."
          tagLine="Why Choose ProCode?"
          services={documentProcessingData}
          bulletColor="bg-linear-to-b from-[#DBC7FF] to-[#EEE5FF]"
          bgColor="bg-linear-to-b from-[#DBC7FF] to-[#EEE5FF]"
        />
      </section>

      <section className="py-24">
        <div
          className="mx-auto max-w-5xl overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat px-4 py-10 text-center"
          style={{ backgroundImage: `url(bg-dark-particle.png)` }}
        >
          <h3 className="mx-auto max-w-3xl text-3xl text-white md:text-4xl">Ready to Automate?</h3>
          <p className="mx-auto my-5 max-w-3xl text-base leading-relaxed text-white md:text-lg">
            Let us show you how our RPA and AI solutions can transform your business. Book a
            Consultation today to start your automation journey.
          </p>
          <Button variant={'secondary'}>Let's Get Started</Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
