import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Markdown from './ui/markdown';
import Link from 'next/link';

interface Props {
  type: 'home' | 'about' | 'services' | 'contact' | 'blog' | 'success-stories';
  title: string;
  subtitle?: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  bgImageUrl: string;
  textColor?:"text-primary" | "text-white";
  alignment: 'center' | 'left';
}
export default function Hero({
  type = 'home',
  title = 'Automate Smarter',
  subtitle = 'Grow Faster',
  description = 'Unlock the full potential of your business with ProCode’s RPA and AI solutions.',
  primaryCtaText = 'Book a Free Discovery Call',
  primaryCtaLink = '#',
  secondaryCtaText = 'See Case Studies',
  secondaryCtaLink = '#',
  bgImageUrl = 'bg-particle.png',
  textColor ="text-primary",
  alignment = 'center',
}: Props) {
  return (
    <>
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImageUrl})` }}
      >
        <div
          className={`relative mx-auto max-w-5xl items-start px-4 pt-24 pb-50 text-${alignment}`}
        >
          <h1 className={`${textColor} text-4xl leading-none md:text-6xl`}>
            {title}.
            {subtitle &&
              (type === 'home' ? (
                <>
                  <br />
                  <span className={`${textColor === "text-primary" ? "text-primary-light" : "text-white"}`}>
                    {subtitle}.
                  </span>
                </>
              ) : (
                <>
                  <p
                    className={`${alignment === 'center' ? 'mx-auto max-w-md' : ''} ${textColor} mt-3 text-2xl leading-relaxed tracking-normal`}
                  >
                    <Markdown md={subtitle} />
                  </p>
                </>
              ))}
          </h1>

          {type === 'success-stories' ? (
            <p
              className={`${alignment === 'center' ? 'mx-auto max-w-md' : ''} ${textColor} mt-3 text-sm tracking-wide`}
            >
              <Markdown md={description} />
            </p>
          ) : (
            <p
              className={`${alignment === 'center' ? 'mx-auto max-w-md' : 'max-w-5xl'} ${textColor} mt-3 text-lg`}
            >
              <Markdown md={description} />
            </p>
          )}

          <div
            className={`mt-10 flex flex-col items-center sm:flex-row ${alignment === 'center' ? 'justify-center' : ''} gap-4`}
          >
            {primaryCtaText && (
              <Link href={primaryCtaLink}>
              <Button size="lg" className="px-8">
                {primaryCtaText}
              </Button>
              </Link>
            )}

            {/* Optional secondary CTA */}
            {secondaryCtaText && (
              <Link href={secondaryCtaLink}>
              <Button size="lg" variant="secondary" className="px-8">
                {secondaryCtaText}
              </Button>
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
