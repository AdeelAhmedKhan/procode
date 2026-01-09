import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type LetsTalkSectionProps = {
  headerNote?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
};
export default function LetsTalkSection({
  headerNote = 'Together, we’ve delivered solutions across industries, helping our clients achieve measurable results while navigating their unique challenges.',
  title = 'Let’s Talk',
  description = 'Ready to explore how ProCode can help your business automate processes and achieve more with less? Book a Consultation or Contact Us to learn more about how our tailored RPA and AI solutions can drive transformation in your organization.',
  ctaText = 'See Case Studies',
  ctaLink = '/contact',
}: LetsTalkSectionProps) {
  return (
    <section className="relative">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Top helper text */}
        <p className="text-primary/80 mx-auto mb-24 max-w-3xl text-center text-sm">
          {headerNote}
        </p>

        {/* CARD */}
        <div className="relative rounded-2xl bg-white shadow-[0px_4px_30px_rgba(0,28,107,0.1)]">
          <div className="p-10 md:p-14 md:pr-64">
            {/* CONTENT */}
            <h2 className="text-primary text-3xl font-semibold tracking-tight">{title}</h2>

            <p className="text-primary/80 mt-4 max-w-lg text-sm leading-relaxed">{description}</p>

            <div className="mt-6">
              <Link href={ctaLink}>
                <Button className="bg-cta hover:bg-cta/80 rounded-lg px-6 py-5 text-sm font-medium">
                  {ctaText}
                </Button>
              </Link>
            </div>
          </div>

          {/* ABSOLUTE IMAGE */}
          <div className="pointer-events-none absolute -right-12 bottom-0 hidden md:block">
            <Image
              src="about/lets-talk.png"
              alt="Booking illustration"
              width={436}
              height={416}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
