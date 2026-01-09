"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Target, Quote, MapPin, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { CASE_STUDIES } from '@/data/caseStudy';



const CaseStudySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = CASE_STUDIES[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CASE_STUDIES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);
  };

    
  return (
    <section className="py-16 px-4 md:px-8 text-primary">
      <div className="max-w-5xl mx-auto relative">
        
        {/* Navigation Arrows (Desktop) */}
        <button onClick={handlePrev} className="hidden lg:flex absolute -left-24 top-1/4 flex-col items-center group transition-all cursor-pointer">
          <div className="p-4 border border-gray-300 rounded-full group-hover:bg-white group-hover:shadow-md transition-all">
            <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-blue-900" />
          </div>
          <span className="mt-2 text-sm font-semibold text-blue-900">Previous</span>
        </button>

        <button onClick={handleNext} className="hidden lg:flex absolute -right-24 top-1/4 flex-col items-center group transition-all cursor-pointer">
          <div className="p-4 border border-gray-300 rounded-full group-hover:bg-white group-hover:shadow-md transition-all">
            <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-blue-900" />
          </div>
          <span className="mt-2 text-sm font-semibold text-blue-900">Next</span>
        </button>

        {/* Content Wrapper */}
        <div className="transition-all duration-500 ease-in-out">
          {/* Header Section */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="bg-highlight text-primary w-10 h-10 rounded-full flex items-center justify-center font-bold">
              {current.id}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-primary text-center max-w-3xl">
              {current.title}
            </h1>
            <div className="flex items-center text-sm font-medium text-primary whitespace-nowrap">
              <MapPin className="w-4 h-4 mr-1 text-highlight" /> {current.location}
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="space-y-6 mb-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3 text-primary">Challenge</h3>
              <p className="text-sm leading-relaxed text-primary">{current.challenge}</p>
            </div>

            <div className="bg-category-green p-8 rounded-2xl shadow-sm border border-lime-200">
              <h3 className="text-xl font-bold mb-3 text-primary">Solution</h3>
              <p className="text-sm leading-relaxed text-primary">{current.solution}</p>
            </div>
          </div>

          {/* Results & Impact Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
              <TrendingUp className="absolute top-6 right-6 w-6 h-6 text-indigo-500 opacity-50" />
              <h3 className="text-xl font-bold mb-4 text-primary">Results</h3>
              <ul className="text-sm space-y-3 text-primary list-disc pl-4">
                {current.results.map((res, i) => <li key={i}>{res}</li>)}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
              <Target className="absolute top-6 right-6 w-6 h-6 text-indigo-500 opacity-50" />
              <h3 className="text-xl font-bold mb-4 text-primary">Impact</h3>
              <p className="text-sm leading-relaxed text-primary">{current.impact}</p>
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="bg-category-blue p-10 rounded-3xl border border-blue-50">
            <h3 className="text-2xl font-bold mb-6 text-primary">Testimonials</h3>
            <p className="text-sm italic text-primary mb-8">Here's what some of our clients are saying about working with us</p>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-white p-4 rounded-xl shadow-sm self-start">
                <Quote className="w-8 h-8 text-primary" fill="currentColor" />
              </div>
              <div className="grow">
                <p className="text-sm leading-relaxed text-primary mb-8 italic">
                  &quot;{current.testimonial.quote}&quot;
                </p>
                
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div className="flex gap-2">
                    <Button onClick={handlePrev} className="p-2 border bg-transparent text-primary border-gray-300 rounded-full hover:bg-white transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </Button>
                    <Button onClick={handleNext} className="p-2 border bg-transparent text-primary border-gray-300 rounded-full hover:bg-white transition-colors">
                        <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg text-primary">{current.testimonial.author}</p>
                    <p className="text-sm font-semibold text-primary uppercase">{current.testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySlider;