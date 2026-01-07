import Hero from '@/components/Hero';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CaseStudy from '@/components/sections/CaseStudy';

export default function SuccessStoriesPage() {
  return (
    <main className="relative w-full">
      <div
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(success-stories/bg-particle-hero.png)` }}
      >
        <Header />
        <Hero
          type="success-stories"
          title="Success Stories"
          subtitle="At ProCode, we don’t just talk about results — <strong> we deliver them.</strong>"
          description="Our Robotic Process Automation (RPA) and Artificial Intelligence (AI) solutions have helped businesses across the globe streamline operations, reduce costs, and unlock new growth opportunities. Below are a few examples of how we've transformed businesses and what our clients have to say about working with us."
          primaryCtaText="Contact Now"
          primaryCtaLink="#"
          secondaryCtaText=""
          secondaryCtaLink="#"
          bgImageUrl=""
          alignment="left"
        />
      </div>

      <CaseStudy />

      <Footer />
    </main>
  );
}
