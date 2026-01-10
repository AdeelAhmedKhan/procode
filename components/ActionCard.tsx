import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

export type CardItem = {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  imageProps:{
    width: number;
    height: number;
    style: string
  }
   
};

export default function ActionCards({ title, description, ctaText, ctaLink, image, imageProps }: CardItem) {
  return (
    <div className="flex flex-col text-center md:text-left rounded-xl bg-white p-6 shadow-md relative md:h-70 shrink-0">
      <div className="flex flex-col justify-between h-full">
        <div>
        <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mb-4 text-sm text-gray-600">{description}</p>

        </div>

      <div className="my-3 mx-auto md:mx-0 md:my-0">
        <Image src={image} alt={title} width={imageProps.width} height={imageProps.height} className={`md:absolute object-contain ${imageProps.style}`}  />
      </div>
        <Link href={ctaLink}>
          <Button variant={"outline"}>
            {ctaText}
          </Button>
        </Link>
      </div>

    </div>
  );
}
