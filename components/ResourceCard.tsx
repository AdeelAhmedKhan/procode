import { ReactNode } from 'react';

interface Props {
  title: string;
  description: string;
  Icon: ReactNode;
  link: string;
}

function ResourceCard({ title, description, Icon, link }: Props) {
  return (
    <div className="flex flex-col items-start rounded-xl bg-white p-8 transition-transform duration-300 hover:-translate-y-1">
      {/* Icon Container */}
      <div className="bg-primary-light mb-6 rounded-lg p-3 text-2xl">{Icon}</div>

      <h4 className="mb-3 text-xl font-bold text-[#1a1a1a]">{title}</h4>

      <p className="mb-8 grow leading-relaxed text-gray-600">{description}</p>

      <a
        href={link}
        className="inline-block rounded-lg border-2 border-purple-200 px-6 py-2 font-semibold text-purple-600 transition-colors hover:bg-purple-50"
      >
        Learn More
      </a>
    </div>
  );
}

export default ResourceCard;
