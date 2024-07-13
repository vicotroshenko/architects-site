import { swiperHero } from '@/types/swiperHero.type';
import { nanoid } from 'nanoid';
import Image from 'next/image';
import React, { Dispatch } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import SubTitle from '../SubTitle/SubTitle.component';
import Title from '../Title/Title.component';

interface SwiperBarProps {
  data: swiperHero;
  setSwiper: Dispatch<SwiperClass>;
  onSlideChange?: (swiper: SwiperClass) => void;
}

const SwiperBar: React.FC<SwiperBarProps> = ({
  data,
  setSwiper,
  onSlideChange,
}) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{
        delay: 10000,
      }}
      pagination={true}
      onSwiper={(swiper) => setSwiper(swiper)}
      wrapperTag="ul"
      onSlideChange={onSlideChange}
    >
      {data.map((item) => (
        <SwiperSlide
          key={nanoid()}
          tag="li"
        >
          <div className="w-full h-full max-md:min-h-[450px] md:min-h-[829px] flex gap-[122px] justify-between items-center">
            <div className="max-lg:absolute top-4 left-4 z-10 mb-[90px]">
              <Title>{item.title}</Title>
              <SubTitle>{item.description.slice(0, 5)}</SubTitle>
            </div>
            <div className="absolute max-lg:inset-0 lg:relative w-full h-full lg:max-w-[770px] md:max-h-[928px] lg:h-screen overflow-hidden">
              <Image
                src={item.images.desktop[0]}
                fill
                alt={item.title}
                className="animate-hero-scale"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperBar;
