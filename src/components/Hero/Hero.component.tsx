'use client';

import { Direction } from '@/constants/swiperButton.constant';
import { useState } from 'react';
import { SwiperClass } from 'swiper/react';



import PROJECTS from '../../../public/data/projects.json';
import Container from '../Container/Container.component';
import CarrouselItem from './CarrouselItem.component';
import SwiperBar from './SwiperBar.component';
import SwiperButton from './SwiperButton.component';


const Hero = () => {
  const [swiperConfig, setSwiperConfig] = useState<SwiperClass>();
  const [currentSlide, setCurrentSlide] = useState(1);
  const projectsForView = PROJECTS.projects.slice(0, 3);

  const handleSliderClick = (e: React.MouseEvent): void => {
    const target = e.currentTarget as HTMLButtonElement;
    const name = target.name as keyof typeof Direction;
    const slideActions = {
      [Direction.RIGHT]: () => {
        swiperConfig?.slideNext();
        setCurrentSlide((prev) => {
          if (prev >= projectsForView.length) return prev;
          return prev + 1;
        });
      },
      [Direction.LEFT]: () => {
        swiperConfig?.slidePrev();
        setCurrentSlide((prev) => {
          if (prev - 1 <= 0) return prev;
          return prev - 1;
        });
      },
    };
    slideActions[name]();
  };

  return (
    <Container sx="flex flex-col items-center mb-[120px] max-md:max-h-[600px]">
      <div className="container w-full relative overflow-hidden">
        <SwiperBar
          setSwiper={setSwiperConfig}
          data={projectsForView}
        />
        <div className="absolute bottom-[83px] left-4 lg:left-0 z-10 max-lg:p-3 ">
          <div className="flex gap-[22px] mb-[90px]">
            <SwiperButton
              onClick={handleSliderClick}
              direction={Direction.LEFT}
              label="prev slider button"
            />
            <SwiperButton
              onClick={handleSliderClick}
              direction={Direction.RIGHT}
              label="next slider button"
            />
          </div>
          <CarrouselItem
            itemCurrent={currentSlide}
            itemAmount={projectsForView.length}
          />
        </div>
      </div>
    </Container>
  );
};

export default Hero;