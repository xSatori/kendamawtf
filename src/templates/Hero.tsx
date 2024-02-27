import Link from 'next/link';
import React from 'react';

// import { Button } from '@/button/Button';
import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
// import { Section } from '@/layout/Section';
import { Section } from '../layout/Section';
// import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
// import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    {/* <Section yPadding="py-6">
       <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            Resources
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
*/}
    <Section yPadding="pt-5 pb-5" className="flex justify-center">
      <img
        src="/assets/images/logo.png"
        className="w-24 h-24 mx-auto"
      />
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
          <Link href="https://youtube.com/playlist?list=PL4LQTX97wWcQYeFGV-4D0QBysJ1t4H0VL&si=hCvKMfV9tyfkA5BP">
            <Button xl>Keep learning here</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
