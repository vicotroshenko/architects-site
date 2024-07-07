import { nanoid } from 'nanoid';
import Link from 'next/link';
import React from 'react';

import CONTENT from '../../../public/data/about.json';
import ArrowIcon from '../ArrowIcon/ArrowIcon.component';
import ButtonWrapper from '../ButtonWrapper/ButtonWrapper.component';
import Container from '../Container/Container.component';
import Title from '../Title/Title.component';
import AboutImageItem from './AboutImageItem.component';

const About = () => {
  const { text, pictures } = CONTENT;
  return (
    <Container sx="mb-[120px] bg-gray-f3">
      <div className="container mx-auto flex items-center w-full lg:max-h-[435px] py-[30px] px-[70px]">
        <ul className="w-full flex flex-wrap gap-[30px] max-md:hidden">
          {pictures.map((pic, index) => (
            <AboutImageItem
              key={nanoid()}
              image={pic.a_1}
              alt={`about pictures ${index + 1}`}
            />
          ))}
        </ul>
        <div className="w-full max-w-[430px] pl-[30px] pr-70px">
          <Title>{text.title}</Title>
          <p className="mb-5 text-base leading-relaxed">{text.info}</p>
          <ButtonWrapper style="LIGHT">
            <Link
              href="about"
              className="flex justify-center items-center gap-2 h-full w-full uppercase tracking-widest text-xs"
            >
              {text.linkButton}
              <ArrowIcon
                wrapperClassName="fill-black"
                width={14}
              />
            </Link>
          </ButtonWrapper>
        </div>
      </div>
    </Container>
  );
};

export default About;
