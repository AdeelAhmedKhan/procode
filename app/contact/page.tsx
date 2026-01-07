import Hero from '@/components/Hero';
import ServiceSection from '@/components/ServiceSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import CTASection from '@/components/sections/CtaSection';
import Header from '@/components/Header';
import SuccessStories from '@/components/ContentImageSection';
import Image from 'next/image';
import Footer from '@/components/Footer';
import ContactCTASection from '@/components/sections/ContactCtaSection';
import ContactForm from '@/components/sections/ContactForm';
import ResourceSection from '@/components/sections/ResourceSection';

export default function ContactPage() {
  return (
    <main className="relative w-full">
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(contact/bg.png)` }}
      >
        <Header />
        <ContactCTASection />
      </section>

      <hr className="bg-muted mx-auto mt-25 mb-10 w-5xl" />

      <ContactForm />
      <ResourceSection />

      <Footer />
    </main>
  );
}
