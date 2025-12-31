'use client'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { usePathname } from "next/navigation";

interface Props {
  type:'home'|'about'|'services'|'contact'|'blog'|'success-stories',
  title: string,
  subtitle?: string,
  description: string,
  primaryCtaText: string,
  primaryCtaLink: string,
  secondaryCtaText?: string,
  secondaryCtaLink?: string,
  bgImage: string,
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
   bgImage='bg-particle.png',
   alignment='center' }: Props
) {

  const bgImageUrl = `${bgImage}`;
  return (
    <>
<section
  className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${bgImageUrl})` }}
>
 

  <div className={`relative container mx-auto px-4 py-32 text-${alignment}`}>
    <h1 className="text-4xl md:text-6xl  leading-none">
      {title}.
      {
        subtitle && (
          type === 'home' ?
          (
          <>
            <br />
            <span className="bg-linear-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
            {subtitle}.
            </span>
          </>
          )

         : (
            <>  
           <p className={`${alignment==='center' ? 'mx-auto max-w-md' : ''} mt-3 text-2xl text-primary  tracking-normal leading-relaxed`}>
      {subtitle}
    </p>
            </>
          )

        )
        
      }
    </h1>

    {
      type==='success-stories' ? (
        <p className={`${alignment==='center' ? 'mx-auto max-w-md' : ''} mt-3 text-sm text-primary tracking-wide`}>
          {description}
        </p>
        
      ):
      (
    <p className={`${alignment==='center' ? 'mx-auto max-w-md' : ''} mt-3 text-lg text-primary `}>
      {description}
    </p>

      )
    }

    <div className={`mt-10 flex flex-col sm:flex-row items-center ${alignment==='center' ? 'justify-center' : ''} gap-4`}>
      <Button size="lg" className=" px-8" >
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

  )
}
