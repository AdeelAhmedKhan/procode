import Image from 'next/image';
import { ReactNode } from 'react';

type ServiceItem = {
  title: string;
  description: string;
};

type ServiceMultiList = {
  style: 'multiList';
  content: ServiceItem[];
  image: string;
  imageAlt?: string;
};

type ServiceSingleList = {
  style: 'singleList';
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
};

type ServiceIconList = {
  style: 'iconList';
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
};

type Services = ServiceMultiList | ServiceSingleList | ServiceIconList;

type ServiceSectionProps = {
  type: 'multiList' | 'singleList' | 'iconList';
  badgeIcon?: ReactNode;
  title: string;
  description?: string;
  tagLine?: string;
  services: Services[];
  footNote?: string;

  /** Styling controls */
  bulletColor?: string;
};

export default function ServiceSection({
  type,
  badgeIcon,
  title,
  description,
  tagLine,
  services,
  footNote,
  bulletColor = 'bg-yellow-400',
}: ServiceSectionProps) {
  let globalIndex = 0;

  return (
    <section className={`${bulletColor} rounded-2xl p-8 md:p-14`}>
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-10">
          <div className="mb-3 flex items-center justify-center gap-3">
            {badgeIcon && (
              <span
                className={`${bulletColor} text-primary flex size-15 items-center justify-center p-2.5 text-xs font-semibold`}
              >
                {badgeIcon}
              </span>
            )}
            <h2 className={`text-primary text-2xl leading-relaxed md:text-3xl`}>{title}</h2>
          </div>

          {description && <p className={`text-primary leading-relaxed`}>{description}</p>}
        </div>
        {/* seperator */}
        <hr className="bg-primary mx-auto my-5 h-0.5 w-5xl" />
        {/* Content */}
        <>
          {type === 'multiList' && (
            <>
              <h2 className="text-primary text-2xl leading-relaxed md:text-3xl">{tagLine}</h2>

              <div className="space-y-15">
                {services.map((block, blockIndex) => (
                  <div
                    key={blockIndex}
                    className={`mb-15 flex flex-col items-start justify-center gap-12 md:flex-row ${
                      blockIndex % 2 === 1 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {block.style === 'multiList' && (
                      <>
                        <ul className="mt-10 flex-1 space-y-6">
                          {block.content.map((item) => {
                            globalIndex += 1;

                            return (
                              <li key={globalIndex} className="flex gap-4">
                                <span
                                  className={`text-primary flex size-6 items-center justify-center rounded-full p-2.5 text-xs font-semibold ${bulletColor}`}
                                >
                                  {globalIndex}
                                </span>

                                <div>
                                  <>
                                    <h4 className="text-primary font-semibold">{item.title}</h4>
                                    <p className="text-primary text-sm">{item.description}</p>
                                  </>
                                </div>
                              </li>
                            );
                          })}
                        </ul>

                        <div className="flex flex-1 justify-center">
                          <Image
                            src={block.image}
                            alt={block.imageAlt ?? ''}
                            width={300}
                            height={300}
                            className="w-full max-w-xs"
                          />
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
          {type === 'singleList' && (
            <>
              <h2 className="text-primary text-2xl leading-relaxed md:text-3xl">{tagLine}</h2>

              <div className="space-y-15">
                {services.map((block, blockIndex) => (
                  <div
                    key={blockIndex}
                    className={`mb-15 flex flex-col items-start justify-center gap-12 md:flex-row ${
                      blockIndex % 2 === 1 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {block.style === 'singleList' && (
                      <>
                        <ul className="mt-10 flex-1 space-y-6">
                          <li key={blockIndex} className="flex gap-4">
                            <span
                              className={`text-primary flex size-6 items-center justify-center rounded-full p-2.5 text-xs font-semibold ${bulletColor}`}
                            >
                              {blockIndex + 1}
                            </span>

                            <div>
                              <>
                                <h4 className="text-primary font-semibold">{block.title}</h4>
                                <p className="text-primary text-sm">{block.description}</p>
                              </>
                            </div>
                          </li>
                        </ul>

                        <div className="flex flex-1 justify-center">
                          <Image
                            src={block.image}
                            alt={block.imageAlt ?? ''}
                            width={300}
                            height={300}
                            className="w-full max-w-xs"
                          />
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {type === 'iconList' && (
            <div className="my-10 flex gap-10">
              <div className="flex-1">
                <h2 className="text-primary text-2xl leading-tight font-semibold">{tagLine}</h2>
              </div>

              <div className="flex-1/2 gap-8">
                {services.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    {/* Icon */}
                    <div className="bg-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
                      <Image src={item.image} alt={item.imageAlt ?? ''} width={28} height={28} />
                    </div>

                    {/* Text */}
                    <div>
                      <h4 className="text-primary font-semibold">
                        {item.style === 'iconList' && item.title}
                      </h4>
                      <p className="text-primary/80 mt-1 text-sm">
                        {item.style === 'iconList' && item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>

        {footNote && (
          <p className="text-primary md:max-3xl my-10 text-center font-bold">{footNote}</p>
        )}
      </div>
    </section>
  );
}
