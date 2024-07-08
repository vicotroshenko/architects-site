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
}

const SwiperBar: React.FC<SwiperBarProps> = ({ data, setSwiper }) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{
        delay: 10000
      }}
      pagination={true}
      onSwiper={(swiper) => setSwiper(swiper)}
    >
      {data.map((item) => (
        <SwiperSlide key={nanoid()}>
          <div className="w-full h-full min-h-[829px] flex gap-[122px] justify-between items-center">
            <div className="max-lg:absolute top-4 left-4 z-10 mb-[90px]">
              <Title>{item.title}</Title>
              <SubTitle>{item.description.slice(0, 5)}</SubTitle>
            </div>
            <div className="absolute max-lg:inset-0 lg:relative w-full h-full lg:max-w-[770px] max-h-[928px] lg:h-screen">
              <Image
                src={item.images.desktop[0]}
                fill
                alt={item.title}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperBar;
