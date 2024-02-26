import Image from 'next/image';

import { Section } from '@/layout/Section';

const Sponsors = () => (
  <Section
    title="Sponsors"
    description="Our sponsors' exceptional support has made this project possible."
  >
    <table className="mx-auto border-collapse">
      <tbody>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://sweetskendamas.wtf"
              target="_blank"
            >
              <Image
                src="/assets/images/sentry-dark.png"
                alt="Sweets Kendamas"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://nouns.wtf"
              target="_blank"
            >
              <Image
                src="/assets/images/nouns.jpg"
                alt="Nouns DAO"
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
