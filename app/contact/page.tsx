import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactCtaSection from '@/components/sections/ContactCtaSection';
import ContactForm from '@/components/sections/ContactForm';
import ResourceSection from '@/components/sections/ResourceSection';
import { resources } from '@/data/resource';
import { Separator } from '@/components/ui/separator';
import ResourceCard from '@/components/ResourceCard';

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

      <Separator className=" mt-25 mb-10" />

      <ContactForm />
      <ResourceSection
        tagline="Not Sure?"
        title="Explore Some of our Resources"
        description="If you're looking to learn more or need some additional information before reaching out, take a moment to explore our resources:"
      >
        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {resources.map((item, index) => (

            <ResourceCard
              key={index}
              title={item.title}
              description={item.description}
              Icon={item.icon}
              link={item.link}
            />
       
          ))}
        </div>
      </ResourceSection>

      <Footer />
    </main>
  );
}
