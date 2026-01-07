import Hero from '@/components/Hero';
import ServiceSection from '@/components/ServiceSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Atom,
  Award,
  Bot,
  ChartNoAxesCombinedIcon,
  Globe,
  LucideGitBranchPlus,
  Puzzle,
  ScanQrCode,
} from 'lucide-react';
import ContentImageSection from '@/components/ContentImageSection';
import LetsTalkSection from '@/components/sections/LetsTalkSection';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  type ServiceItem = {
    title: string;
    description: string;
  };

  type ServiceMultiList = {
    style: 'multiList';
    content: ServiceItem[];
    image: string;
    imageAlt?: string;
  };

  type ServiceSingleList = {
    style: 'singleList';
    title: string;
    description: string;
    image: string;
    imageAlt?: string;
  };
  type ServiceIconList = {
    style: 'iconList';
    title: string;
    description: string;
    image: string;
    imageAlt?: string;
  };

  const rpaBenefits: ServiceMultiList[] = [
    {
      style: 'multiList',
      content: [
        {
          title: 'Automation of Manual Workflows',
          description: 'Eliminate repetitive tasks and allow teams to focus on strategic work.',
        },
        {
          title: 'Error Reduction',
          description: 'Minimize human errors by standardizing automated processes.',
        },
        {
          title: 'Automation of Manual Workflows',
          description: 'Eliminate repetitive tasks and allow teams to focus on strategic work.',
        },
        {
          title: 'Error Reduction',
          description: 'Minimize human errors by standardizing automated processes.',
        },
      ],
      image: 'services/rpa/rpa-robot.png',
      imageAlt: 'RPA Automation Benefits',
    },
    {
      style: 'multiList',
      content: [
        {
          title: 'Scalability',
          description: 'Easily scale operations without increasing headcount.',
        },
        {
          title: 'Cost Efficiency',
          description: 'Reduce operational costs while increasing productivity.',
        },
        {
          title: 'Scalability',
          description: 'Easily scale operations without increasing headcount.',
        },
        {
          title: 'Cost Efficiency',
          description: 'Reduce operational costs while increasing productivity.',
        },
      ],
      image: 'services/rpa/rpa-robot.png',
      imageAlt: 'RPA Scalability Benefits',
    },
  ];
  const ai: ServiceSingleList[] = [
    {
      style: 'singleList',
      title: 'Chatbots & Virtual Assistants',
      description:
        'Automate customer interactions and provide round-the-clock service through AI-powered chatbots or voice assistants, capable of handling language-based queries in real time.',
      image: 'services/ai/1.png',
    },
    {
      style: 'singleList',
      title: 'RAG (Retrieval-Augmented Generation)',
      description:
        'Enhance your document retrieval systems with our RAG solutions. AI models fetch relevant data from large datasets and generate responses or summaries based on external sources. This is ideal for industries like legal, healthcare, and finance where quick access to accurate data is critical.',
      image: 'services/ai/2.png',
    },
    {
      style: 'singleList',
      title: 'Document Processing with AI',
      description:
        "AI can complement RPA by enhancing document handling tasks. While RPA automates structured document processes, AI can interpret and extract unstructured data from scanned PDFs, invoices, contracts, and other complex formats. This allows you to automate more sophisticated document processing tasks that RPA alone can't handle efficiently.",
      image: 'services/ai/3.png',
    },
  ];

  const dp: ServiceIconList[] = [
    {
      style: 'iconList',
      title: 'Tailored Solutions for Your Industry',
      description:
        'We design personalized RPA and AI strategies that align with your unique needs, driving maximum impact and efficiency across all areas of your operations.',
      image: 'services/dp/1.png',
    },
    {
      style: 'iconList',
      title: 'Innovative AI Capabilities',
      description:
        'From document processing to intelligent retrieval systems, our AI solutions help your business leverage data like never before.',
      image: 'services/dp/2.png',
    },
    {
      style: 'iconList',
      title: 'Proven Results',
      description:
        'Our clients have seen significant cost savings and operational efficiencies with our RPA and AI solutions.',
      image: 'services/dp/3.png',
    },
  ];

  return (
    <main className="relative w-full">
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
        bgImageUrl="bg-particle.png"
        alignment="left"
      />

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
          <hr className="bg-muted mx-auto mt-12 w-5xl" />
        </div>
      </section>

      {/* our services */}
      <section className="container mx-auto space-y-20 py-10">
        <ServiceSection
          type="multiList"
          badgeIcon={<Bot />}
          title="Robotic Process Automation (RPA)"
          description="Our RPA solutions automate repetitive tasks, increase operational efficiency, and reduce human errors, allowing your team to focus on high-value activities. We work across industries including manufacturing, supply chain, healthcare, retail, and more."
          tagLine="How RPA benefit your business?"
          services={rpaBenefits}
          footNote="RPA is ideal for automating structured and rule-based tasks that can be replicated in digital systems, making your operations more efficient and cost-effective."
          bulletColor="bg-linear-to-b from-[#FFE28D] to-[#FFF2C9]"
        />

        <ServiceSection
          type="singleList"
          badgeIcon={<Atom />}
          title="AI Integration"
          description="Artificial Intelligence is transforming business landscapes, and our AI solutions are built to give you a competitive edge. Whether it’s optimizing workflows or enhancing decision-making, our AI services help you get more out of your existing processes."
          tagLine="Key AI Solutions We Offer"
          services={ai}
          footNote="The AI landscape is evolving rapidly, and the services we offer evolve with it. If you have other AI-related tasks or projects, don’t hesitate to reach out to us, and we'll explore how we can assist you."
          bulletColor="bg-linear-to-b from-[#C9FBC0] to-[#71F9F0]"
        />

        <ServiceSection
          type="iconList"
          badgeIcon={<ScanQrCode />}
          title="Document Processing & RAG"
          description="Our consulting services help you identify the right RPA and AI solutions tailored to your business challenges. We guide you through the automation process, from initial assessment to successful implementation, ensuring that your investment delivers maximum value."
          tagLine="Why Choose ProCode?"
          services={dp}
          bulletColor="bg-linear-to-b from-[#DBC7FF] to-[#EEE5FF]"
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
