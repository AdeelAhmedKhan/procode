import { Button } from "@/components/ui/button"
import Image from "next/image"
import Markdown from "./ui/markdown"

interface Props {
  type:'home'|'about'|'services'|'contact'|'blog'|'success-stories',
  title: string,
  subtitle?: string,
  description: string,
  primaryCtaText: string,
  primaryCtaLink: string,
  secondaryCtaText?: string,
  secondaryCtaLink?: string,
  bgImageUrl: string,
  alignment: 'center' | 'left'
}
export default function Hero(
  { 
    type='home',
    title='Automate Smarter',
   subtitle='Grow Faster',
   description='Unlock the full potential of your business with ProCode’s RPA and AI solutions.',
   primaryCtaText='Book a Free Discovery Call',
   primaryCtaLink='#',
   secondaryCtaText='See Case Studies',
   secondaryCtaLink='#',
   bgImageUrl='bg-particle.png',
   alignment='center' }: Props
) {
  
  return (
    <>
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImageUrl})` }}
      >
        <div
          className={`relative mx-auto max-w-5xl items-start px-4 pt-24 pb-50 text-${alignment}`}
        >
          <h1 className="text-4xl leading-none md:text-6xl text-primary">
            {title}.
            {subtitle &&
              (type === 'home' ? (
                <>
                  <br />
                  <span className="from-primary bg-linear-to-r to-indigo-500 bg-clip-text text-transparent">
                    {subtitle}.
                  </span>
                </>
              ) : (
                <>
                  <p
                    className={`${alignment === 'center' ? 'mx-auto max-w-md' : ''} text-primary mt-3 text-2xl leading-relaxed tracking-normal`}
                  >
                    {subtitle}
                  </p>
                </>
              ))}
          </h1>

          {type === 'success-stories' ? (
            <p
              className={`${alignment === 'center' ? 'mx-auto max-w-md' : ''} text-primary mt-3 text-sm tracking-wide`}
            >
              <Markdown md={description} />
            </p>
          ) : (
            <p
              className={`${alignment === 'center' ? 'mx-auto max-w-md' : 'max-w-5xl'} text-primary mt-3 text-lg`}
            >
              <Markdown md={description} />
            </p>
          )}

          <div
            className={`mt-10 flex flex-col items-center sm:flex-row ${alignment === 'center' ? 'justify-center' : ''} gap-4`}
          >
            <Button size="lg" className="px-8">
              {primaryCtaText}
            </Button>

            {/* Optional secondary CTA */}
            {secondaryCtaText && (
              <Button size="lg" variant="secondary" className="px-8">
                {secondaryCtaText}
              </Button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
