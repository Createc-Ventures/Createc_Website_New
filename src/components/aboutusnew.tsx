import React from 'react';
import { Bolt, MessageSquare, BarChart } from 'lucide-react';

const items = [
  {
    icon: <Bolt size={40} className="text-createc-orange" />,
    title: 'Innovation',
    description: 'Pushing boundaries with creative tech solutions',
  },
  {
    icon: <MessageSquare size={40} className="text-createc-orange" />,
    title: 'Communication',
    description: 'Clear and effective brand messaging',
  },
  {
    icon: <BarChart size={40} className="text-createc-orange" />,
    title: 'Growth',
    description: 'Scalable solutions for evolving brands',
  },
];

export default function WhatWereAllAbout() {
  return (
    <section id='about'>
    <div className="bg-createc-platinum text-white py-20 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 bg-createc-platinum rounded-lg p-8">

        {/* Left Text Section - Wider */}
        <div className="md:w-3/5 space-y-5">
          <h2 className="text-3xl font-bold text-createc-orange">
            What We're All About
          </h2>
          <p className="text-createc-charcoal text-lg">
            At Createc, we blend creativity with technology to deliver comprehensive digital
            solutions. From managing dynamic social media campaigns to developing sleek websites and
            user-friendly apps, we ensure every brand stands out in the digital space.
          </p>
          <p className="text-createc-charcoal text-lg">
            Our mission is to help brands elevate their digital presence through innovative and
            tailored solutions.
          </p>
        </div>

        {/* Right Icons Section */}
        <div className="md:w-2/5 space-y-12 mt-4 bg-createc-platinum rounded-lg p-8">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-5">
              <div className="shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-createc-yellow">{item.title}</h3>
                <p className="text-sm text-createc-charcoal">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
    </section>
  );
}
