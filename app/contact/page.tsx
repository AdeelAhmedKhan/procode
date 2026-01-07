
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactCtaSection from '@/components/sections/ContactCtaSection';
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
        <ContactCtaSection />
      </section>

      <hr className="bg-muted mx-auto mt-25 mb-10 w-5xl" />

      <ContactForm />
      <ResourceSection />

      <Footer />
    </main>
  );
}
