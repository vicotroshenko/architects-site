'use client';

import { Direction } from '@/constants/sliderButton.constant';
import clsx from 'clsx';
import { nanoid } from 'nanoid';
import Image from 'next/image';
import React, { useState } from 'react';



import PROJECTS from '../../../public/data/projects.json';
import Container from '../Container/Container.component';
import SubTitle from '../SubTitle/SubTitle.component';
import Title from '../Title/Title.component';
import CarrouselItem from './CarrouselItem.component';
import SliderButton from './SliderButton.component';


const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const { projects } = PROJECTS;
  const cutProjects = projects.slice(0, 3);

  const handleSliderClick = (e: React.MouseEvent): void => {
    const target = e.currentTarget as HTMLButtonElement;
    const { name } = target;
    if (name === Direction.RIGHT) {
      setCurrentSlide((prev) => {
        if (prev >= cutProjects.length) return prev;
        return prev + 1;
      });
    }
    if (name === Direction.LEFT) {
      setCurrentSlide((prev) => {
        if (prev - 1 <= 0) return prev;
        return prev - 1;
      });
    }
  };

  const translateValue = ((100 / cutProjects.length) * (currentSlide - 1)).toFixed(2);
  return (
    <Container sx="flex flex-col items-center mb-[120px]">
      <div className="container relative overflow-hidden">
        <ul className={clsx('w-[300%] flex', `translate-x-[-${translateValue}%]`)}>
          {cutProjects.map((item) => (
            <li
              key={nanoid()}
              className="w-full flex justify-between px-[135px]"
            >
              <div>
                <Title>{item.title}</Title>
                <SubTitle>{item.description.slice(0, 5)}</SubTitle>
              </div>
              <div className="relative w-full max-w-[770px] h-screen">
                <Image
                  src={item.images.desktop[0]}
                  fill
                  alt={item.title}
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="absolute bottom-[100px] left-0">
          <div className="flex gap-2 mb-10">
            <SliderButton
              onClick={handleSliderClick}
              direction="LEFT"
              label="prev slider button"
            />
            <SliderButton
              onClick={handleSliderClick}
              direction="RIGHT"
              label="next slider button"
            />
          </div>
          <CarrouselItem
            itemCurrent={currentSlide}
            itemAmount={cutProjects.length}
          />
        </div>
      </div>
    </Container>
  );
};

export default Hero;