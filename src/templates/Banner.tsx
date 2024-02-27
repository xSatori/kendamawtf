import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Check out Sweet Kendamas Foundation on YouTube."
      subtitle="Get inspired today."
      button={
        <Link href="https://www.youtube.com/@sweetskendamasfoundation">
          <Button>SKF YouTube</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
