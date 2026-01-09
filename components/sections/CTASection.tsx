import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type CTASectionProps = {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
};
export default function CTASection({
  title = 'Unlock Your Business\'s Potential',
  description = 'If you\'re ready to boost efficiency, cut operational costs, and harness the power of AI, our team is here to guide you through your automation journey.',
  ctaText = 'Book a Free Discovery Call',
  ctaLink = '/contact',
}: CTASectionProps) {
  return (
          <section className="relative bg-cta text-white py-20 px-6 mt-50">

      {/* Content */}
        {/* Background Image (half visible) */}
        <div className="pointer-events-none absolute left-1/2 top-0 w-full -translate-x-1/2 -translate-y-7/12 ">
          <Image
            src="home/cta-bg.png" // use a soft abstract image or pattern
            alt="Background Pattern"
            width={700}
            height={700}
            className="w-full bg-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h2>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-white/90">{description}</p>

          <div className="mt-10">
            <Link href={ctaLink}>
              <Button size="lg" variant="secondary" className="px-8">
                {ctaText}
              </Button>
            </Link>
          </div>
        </div>
    </section>
  );
}
