import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Markdown from "./ui/markdown";

export interface ContentImageSectionProps {
  title: string;
  description: string;
  highlightText?: string;

  imageSrc: string;
  imageAlt?: string;

  showCTA?: boolean;
  ctaText?: string;
  onCTAClick?: () => void;

  reverse?: boolean; // swap left & right
}

export default function ContentImageSection({
  title,
  description,
  highlightText,
  imageSrc,
  imageAlt = "",
  showCTA = true,
  ctaText = "Read More",
  onCTAClick,
  reverse = false,
}: ContentImageSectionProps) {
  return (
    <section>
      <div className="container max-w-5xl mx-auto px-4">
        <div
          className={cn(
            "grid items-center gap-12 md:grid-cols-2",
            reverse && "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"
          )}
        >
          {/* CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl tracking-tight text-primary">
              {title}
            </h2>

            <p className="mt-6 leading-relaxed text-primary">
              <Markdown md={description} />
            </p>

            {highlightText && (
              <p className="mt-4 font-semibold text-primary">
                {highlightText}
              </p>
            )}

            {showCTA && (
              <div className="mt-8">
                <Button
                  className="rounded-full px-8"
                  onClick={onCTAClick}
                >
                  {ctaText}
                </Button>
              </div>
            )}
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={600}
                height={420}
                className=" object-contain "
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
