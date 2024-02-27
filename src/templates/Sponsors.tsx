import Image from 'next/image';
import React from 'react';

import { Section } from '@/layout/Section';

const Sponsors = () => (
  <Section 
    title="Special Thanks" 
    description="This was made possible thanks to these awesome organizations."
    >
    <table className="mx-auto border-collapse">
      <tbody>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <a href="/" target="_blank">
              <Image
                src="/assets/images/SKF.png"
                alt="Sweets Kendamas Foundation"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="/" target="_blank">
              <Image
                src="/assets/images/noggles.png"
                alt="Nouns"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="/" target="_blank">
              <Image
                src="/assets/images/sweets.png"
                alt="Sweets Kendamas"
                width={260}
                height={224}
              />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </Section>
);

export { Sponsors };
