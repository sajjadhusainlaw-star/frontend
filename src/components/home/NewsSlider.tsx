"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import img1 from '../../assets/slider/image.svg'
import img2 from '../../assets/slider/mask.svg'
import img3 from '../../assets/slider/maskgroup.svg'

export default function NewsSlider() {
  const slides = [
    {
      image: img1,
      title: "Breaking News: AI Revolutionizing Industries",
      description:
        "Artificial Intelligence is transforming how businesses operate across healthcare, finance, and education.",
      link: "#",
    },
    {
      image: img2,
      title: "Tech Giants Invest in Clean Energy",
      description:
        "Major technology companies are committing billions toward sustainable energy solutions.",
      link: "#",
    },
    {
      image: img3,
      title: "Startups Driving Innovation in 2025",
      description:
        "New startups are redefining traditional industries with cutting-edge solutions and AI-powered tools.",
      link: "#",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative w-full bg-[#0A2342] sm:mt-20 border-y border-gray-700">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative order-2 md:order-1">
              <div className="relative h-[350px] md:h-[450px] rounded-lg overflow-hidden shadow-2xl group">
                <Image
                  src={slides[current].image}
                  alt={slides[current].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="order-1 md:order-2 space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                  {slides[current].title}
                </h2>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  {slides[current].description}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={slides[current].link}
                  className="inline-flex items-center text-sm font-semibold text-white hover:text-gray-300 transition-colors group"
                >
                  Read Article
                  <svg
                    className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex gap-3">
                  <button
                    onClick={prevSlide}
                    className="p-2 rounded-full border border-gray-600 hover:border-white hover:bg-white/10 transition-all"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={20} className="text-white" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-2 rounded-full border border-gray-600 hover:border-white hover:bg-white/10 transition-all"
                    aria-label="Next slide"
                  >
                    <ChevronRight size={20} className="text-white" />
                  </button>
                </div>

                {/* Slide Indicators */}
                <div className="flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrent(index)}
                      className="group"
                      aria-label={`Go to slide ${index + 1}`}
                    >
                      <div
                        className={`h-1 rounded-full transition-all duration-300 ${current === index
                          ? "w-8 bg-white"
                          : "w-6 bg-gray-600 group-hover:bg-gray-400"
                          }`}
                      />
                    </button>
                  ))}
                </div>

                {/* Counter */}
                <div className="text-sm text-gray-400 font-medium">
                  <span className="text-white">{String(current + 1).padStart(2, '0')}</span>
                  <span className="mx-1">/</span>
                  <span>{String(slides.length).padStart(2, '0')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
