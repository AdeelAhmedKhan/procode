import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import ResourceSection from '@/components/sections/ResourceSection';
import FeaturedPosts from '@/components/FeaturedPosts';
import { Separator } from '@/components/ui/separator';
import ActionCards, { CardItem } from '@/components/ActionCard';
import BlogList from '@/components/sections/blogList';

export default function BlogsPage() {
  const actionCards: CardItem[] = [
    {
      title: 'Let’s Talk',
      description: 'Book a Free Consultation to discuss your needs.',
      ctaText: 'Book Now',
      ctaLink: '#',
      image: 'blogs/images/action1.png',
      imageProps: { width: 200, height: 150, style: '-right-7 bottom-0' },
    },
    {
      title: 'RPA Savings',
      description: 'See potential savings with our RPA Savings Calculator.',
      ctaText: 'Calculate',
      ctaLink: '#',
      image: 'blogs/images/action2.png',
      imageProps: { width: 120, height: 100, style: 'right-5 bottom-4' },
    },
    {
      title: 'Success Stories',
      description: 'Read real-world Success Stories from businesses like yours.',
      ctaText: 'Read More',
      ctaLink: '#',
      image: 'blogs/images/action3.png',
      imageProps: { width: 200, height: 150, style: 'right-0 bottom-10' },
    },
  ];
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
      <section className="py-5">
        <FeaturedPosts />
      </section>

      <Separator className="" />

      <BlogList />


      <ResourceSection
        title="Take the Next Step"
        description="Ready to explore how RPA and AI can transform your business?"
        alignment="center"
      >
        <>
          {/* todo */}
          <div className="mx-auto max-w-5xl px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {actionCards.map((card, index) => (
                <ActionCards key={index} {...card} />
              ))}
            </div>
          </div>
        </>
      </ResourceSection>

      <Footer />
    </main>
  );
}
