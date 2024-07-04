import clsx from 'clsx';
import { nanoid } from 'nanoid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import CONTENT from '../../../public/data/about.json';
import ButtonWrapper from '../ButtonWrapper/ButtonWrapper.component';
import Container from '../Container/Container.component';

const About = () => {
  const { text, pictures } = CONTENT;
  return (
    <Container>
      <div className="flex items-center w-full bg-gray-f3 py-[30px] px-[70px]">
        <div className="flex flex-wrap w-full">
          {pictures.map((pic, index) => (
            <div
              className={clsx(
                'relative w-full max-w-[270px] first:h-[265px]',
                '[&:nth-child(2)]:h-[345px]',
                'last:h-[140px]'
              )}
              key={nanoid()}
            >
              <Image
                src={pic.a_1}
                fill
                alt={`about pic # ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div className='w-full max-w-[430px] pl-[30px] pr-70px'>
          <h2 className="mb-5 capitalize">{text.title}</h2>
          <p className="mb-5">{text.info}</p>
          <ButtonWrapper style="LIGHT">
            <Link href="about">{text.linkButton}</Link>
          </ButtonWrapper>
        </div>
      </div>
    </Container>
  );
};

export default About;
