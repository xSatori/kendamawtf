import Image from 'next/image';
import React from 'react';
import { Section } from '@/layout/Section';

const Sponsors = () => (
  <Section
    title="Special Thanks"
    description="This was made possible thanks to these awesome organizations."
  >
    <div className="flex justify-center items-center flex-wrap">
      <div className="p-3 border-2 border-gray-300">
        <a href="/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/images/SKF.png"
            alt="Sweets Kendamas Foundation"
            width={260}
            height={224}
          />
        </a>
      </div>
      <div className="p-3 border-2 border-gray-300">
        <a href="/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/images/noggles.png"
            alt="Nouns"
            width={260}
            height={224}
          />
        </a>
      </div>
      <div className="p-3 border-2 border-gray-300">
        <a href="/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/images/sweets.png"
            alt="Sweets Kendamas"
            width={260}
            height={224}
          />
        </a>
      </div>
    </div>
  </Section>
);

export { Sponsors };
