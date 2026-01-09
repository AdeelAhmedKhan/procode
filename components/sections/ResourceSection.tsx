import { ResourceItem } from '@/lib/types/Resources';
import Image from 'next/image';

export default function ResourceSection({data}:{data:ResourceItem[]}) {
  return (
    <section className="relative bg-primary-light text-white py-20 px-6 overflow-hidden ">
           <div className="pointer-events-none absolute left-1/2 top-0 w-full -translate-x-1/2 -translate-y-1/3 ">
             <Image
               src="contact/resource-bg.png" // use a soft abstract image or pattern
               alt="Background Pattern"
               width={700}
               height={700}
               className="bg-cover w-full"
             />
           </div>

      <div className="max-w-5xl mx-auto relative z-10 pt-30">
        {/* Header Content */}
        <div className="mb-12 max-w-2xl">
          <h3 className="text-2xl mb-2">Not Sure?</h3>
          <h2 className="text-4xl mb-4">Explore Some of our Resources</h2>
          <p className="text-blue-100 opacity-90">
            If you're looking to learn more or need some additional information before 
            reaching out, take a moment to explore our resources:
          </p>
        </div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 flex flex-col items-start transition-transform hover:-translate-y-1 duration-300"
            >
              {/* Icon Container */}
              <div className="bg-primary-light rounded-lg p-3 mb-6 text-2xl">
                {item.icon}
              </div>
              
              <h4 className="text-[#1a1a1a] text-xl font-bold mb-3">
                {item.title}
              </h4>
              
              <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                {item.description}
              </p>
              
              <a 
                href={item.link}
                className="inline-block px-6 py-2 border-2 border-purple-200 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

