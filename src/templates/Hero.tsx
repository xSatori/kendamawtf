import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://kendama.wtf/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/">Resources</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Welcome to the analog game for\n'}
            <span className="text-lime-500">the digital era.</span>
          </>
        }
        description="Congratulations on your first spike!"
        button={
          <Link href="https://poap.website/kendamawtf">
            <Button xl>Claim your POAP</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
