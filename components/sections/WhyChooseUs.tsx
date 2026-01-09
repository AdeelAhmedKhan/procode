import { Button } from '@/components/ui/button';
import FeatureCard from '../FeatureCard';
import React from 'react';
import Link from 'next/link';

type WhyChooseUsItem = {
  title: string;
  description: string;
  icon: React.ElementType;
};
type WhyChooseUsProps = {
  description: string;
  data: WhyChooseUsItem[];
  showCta?: boolean;
};
export default function WhyChooseUs({ description, data, showCta = true }: WhyChooseUsProps) {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-primary text-3xl tracking-tight md:text-4xl">Why Choose Us?</h2>

        {description && <p className="text-primary mx-auto mt-4 max-w-3xl">{description}</p>}

        {/* Cards */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 grid-rows-2 justify-items-center gap-8 md:grid-cols-2 md:grid-rows-1">
          {data.map((item) => (
            <FeatureCard title={item.title} description={item.description} Icon={item.icon} />
          ))}
        </div>

        {/* CTA */}
        {showCta && (
          <div className="mt-14 text-center">
            <p className="text-primary text-sm">
              Schedule a free consultation to learn more about how we can help your business evolve.
            </p>

            <Link href="/contact">
              <Button className="mt-4 px-8">Get in Touch</Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
