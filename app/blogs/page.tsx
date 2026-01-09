import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Atom, Bot, ScanQrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { aiData, documentProcessingData, robotAutomationData } from '@/data/services';
import ResourceSection from '@/components/sections/ResourceSection';
import { resources } from '@/data/resource';
import FeaturedPosts from '@/components/FeaturedPosts';
import { Separator } from '@/components/ui/separator';

export default function BlogsPage() {
  return (
    <main className="relative w-full">
      <div
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(bg-dark-particle.png)` }}
      >
        <Header variant="transparent" />
        <Hero
          type="services"
          title="Blog"
          subtitle="Explore insights, strategies, and industry trends on RPA, AI, and automation."
          description="Stay informed and discover how automation can transform your business"
          primaryCtaText=""
          primaryCtaLink=""
          secondaryCtaText="Read More"
          secondaryCtaLink="#"
          bgImageUrl=""
          textColor="text-white"
          alignment="left"
        />
      </div>

      {/* intro */}
      <section className="py-10">
        <FeaturedPosts />
      </section>

      <Separator className="my-12" />

      <ResourceSection
        title="Take the Next Step"
        description="Ready to explore how RPA and AI can transform your business?"
        alignment="center"
      >
        <>{/* todo */}</>
      </ResourceSection>

      <Footer />
    </main>
  );
}
