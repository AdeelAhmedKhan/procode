import { ResourceItem } from '@/lib/types/Resources';
import Image from 'next/image';
import React from 'react';

type Props = {
  tagline?: string;
  title: string;
  description?: string;
  alignment?: 'center' | 'left';
  children?: React.ReactNode;
};
export default function ResourceSection({
  tagline,
  title,
  description,
  alignment="left",
  children,

}: Props) {
  return (
    <section className="bg-primary-light relative overflow-hidden px-6 py-20 text-white">
      <div className="pointer-events-none absolute top-0 left-1/2 w-full -translate-x-1/2 -translate-y-1/3">
        <Image
          src="contact/resource-bg.png" // use a soft abstract image or pattern
          alt="Background Pattern"
          width={700}
          height={700}
          className="w-full bg-cover"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl pt-30">
        {/* Header Content */}
        <div className={`mb-12 ${alignment === "center" ? "text-center" : ""}`}>
          {tagline && <h3 className="mb-2 text-2xl">{tagline}</h3>}

          {title && <h2 className="mb-4 text-4xl">{title}</h2>}
          
          {description && <p className="text-blue-100 opacity-90">{description}</p>}
        </div>

        {children}
      </div>
    </section>
  );
}
