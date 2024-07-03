'use client';

import Screens from '@/constants/screen.constant';
import { nanoid } from 'nanoid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import CONTENT from '../../data/about.json';
import ButtonWrapper from '../ButtonWrapper/ButtonWrapper.component';
import Container from '../Container/Container.component';

const About = () => {
  const { text, pictures } = CONTENT;
  console.log(text);
  return (
    <Container>
      <div className="flex items-center bg-gray-f3 py-[30px] px-[70px]">
        <div className='flex flex-wrap'>
        {pictures.map((pic, index) => (
          <picture key={nanoid()} className='first:min-h-[264px] [&:nth-child(3)]:min-h-[345px] last:min-h-[140px]'>
            <source
              srcSet={`${pic.a_1_m} 1x, ${pic.a_1_m_2x} 2x`}
              media={`(max-width: ${Screens.MD}px)`}
            />
            <source
              srcSet={`${pic.a_1} 1x, ${pic.a_1_2x} 2x`}
              media={`(min-width: ${Screens.MD}px)`}
            />
            <img
              src={pic.a_1}
              alt={`about company number ${index + 1}`}
              loading="lazy"
            />
          </picture>
        ))}
      </div>
      <div>
        <h2 className='mb-5 capitalize'>{text.title}</h2>
        <p className='mb-5'>{text.info}</p>
        <ButtonWrapper style="LIGHT">
          <Link href="about">{text.linkButton}</Link>
        </ButtonWrapper>
      </div>
      </div>
    </Container>
  );
};

export default About;
