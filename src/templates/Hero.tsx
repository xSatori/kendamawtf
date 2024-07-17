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
    <Section yPadding="pt-5 pb-0" className="flex justify-center">
      <img
        src="/assets/images/logo.png"
        alt="kendama.wtf"
        className="mx-auto size-32"
      />
    </Section>
    <Section yPadding="pt-5 pb-24">
      <HeroOneButton
        title={
          <>
            {'Welcome to the analog game for\n'}
            <span className="text-lime-500">the digital era.</span>
          </>
        }
        description="Never be bored again!"
        button={
          <div className="flex space-x-4 justify-center">
            <Link href="https://www.youtube.com/watch?v=WgYdv7unlQs">
              <Button xl>Mindfulness Through Play</Button>
            </Link>
            <Link href="https://youtube.com/playlist?list=PL4LQTX97wWcQYeFGV-4D0QBysJ1t4H0VL&si=hCvKMfV9tyfkA5BP">
              <Button xl>Tutorials</Button>
            </Link>
            <Link href="https://nounish.com">
              <Button xl>Nouns DAO</Button>
            </Link>
          </div>
        }
      />
    </Section>
  </Background>
);

export { Hero };
