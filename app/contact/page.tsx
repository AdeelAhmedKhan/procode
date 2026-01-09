import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactCtaSection from '@/components/sections/ContactCtaSection';
import ContactForm from '@/components/sections/ContactForm';
import ResourceSection from '@/components/sections/ResourceSection';
import { resources } from '@/data/resource';
import { Separator } from '@/components/ui/separator';

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
            <div
              key={index}
              className="flex flex-col items-start rounded-xl bg-white p-8 transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className="bg-primary-light mb-6 rounded-lg p-3 text-2xl">{item.icon}</div>

              <h4 className="mb-3 text-xl font-bold text-[#1a1a1a]">{item.title}</h4>

              <p className="mb-8 grow leading-relaxed text-gray-600">{item.description}</p>

              <a
                href={item.link}
                className="inline-block rounded-lg border-2 border-purple-200 px-6 py-2 font-semibold text-purple-600 transition-colors hover:bg-purple-50"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </ResourceSection>

      <Footer />
    </main>
  );
}
