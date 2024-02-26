import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Check out Sweet Kendamas tutorial library on YouTube."
      subtitle="Start learning today."
      button={
        <Link href="https://youtube.com/playlist?list=PL4LQTX97wWcQYeFGV-4D0QBysJ1t4H0VL&si=hCvKMfV9tyfkA5BP">
          <Button>Get Started</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
