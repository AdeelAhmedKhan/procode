import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import Markdown from '../ui/markdown';

type CTASectionProps = {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
};
export default function ContactCtaSection({
  title = 'Book a Free Consultation',
  description = 'Looking to discuss how automation can benefit your business? <br> <br> Schedule a free consultation with our experts to explore tailored solutions that meet your unique needs.',
  ctaText = 'Book Now',
  ctaLink = '#',
}: CTASectionProps) {
  return (
    <section className="relative mx-auto max-w-5xl overflow-hidden py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Top Text */}
        <div className="mb-16 max-w-xl">
          <h2 className="text-primary text-5xl">
            Get in Touch <br />
            <span className="text-blue-700">with ProCode</span>
          </h2>

          <p className="text-primary mt-4 text-2xl">
            We’re here to help you explore how RPA and AI can transform your business.
          </p>

          <p className="text-primary/80 mt-2 text-sm">
            Whether you’re interested in learning more about our services, booking a consultation,
            or just have some questions, we’d love to hear from you!
          </p>
        </div>

        {/* CTA Card */}
        <div className="relative flex flex-col items-start gap-10 rounded-2xl bg-gradient-to-r from-blue-800 to-indigo-700 p-10 md:flex-row md:items-center">
          {/* Text */}
          <div className="max-w-xl text-white">
            <h3 className="text-3xl font-semibold">{title}</h3>

            <p className="my-4 text-white/90">
              <Markdown md={description} />
            </p>

            <Link href={ctaLink}>
              <Button variant="secondary">{ctaText}</Button>
            </Link>
          </div>

          {/* Phone Image */}
          <div className="w-full md:w-auto">
            <Image
              src="contact/calendly-mobile.png"
              alt="Calendly Booking"
              width={190}
              height={500}
              className="mx-auto md:absolute md:-top-20 md:right-16"
            />
          </div>

          {/* Decorative text */}
          <span className="pointer-events-none absolute right-65 bottom-3 text-6xl font-bold">
            <Image
              src="contact/logo-highlight.png"
              alt="Calendly Booking"
              width={150}
              height={150}
            />
          </span>
        </div>
      </div>
    </section>
  );
}
