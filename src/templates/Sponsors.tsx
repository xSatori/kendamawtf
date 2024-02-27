import Image from 'next/image';

import { Section } from '@/layout/Section';

const Sponsors = () => (
  <Section
    title="Special Thanks"
    description="This was made possible by these awesome organizations."
  >
    <table className="mx-auto border-collapse">
      <tbody>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo"
              target="_blank"
            >
              <Image
                src="/assets/images/SKF.png"
                alt="Sweets Kendamas Foundation"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo"
              target="_blank"
            >
              <Image
                src="/assets/images/noggles.png"
                alt="Nouns"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate"
              target="_blank"
            >
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
