import { nanoid } from 'nanoid';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import Lightbox, { SlideImage } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface ProjectsSwiperProps {
  images: string[];
}

const ProjectsSwiper: React.FC<ProjectsSwiperProps> = ({ images }) => {
  const [toggler, setToggler] = useState(false);
  const currentIndex = useRef(1);
  const openFullScreen = () => setToggler(true);

  const onSlideChange = (swiper: SwiperClass) => {
    currentIndex.current = swiper.activeIndex;
  };

  const picsFull = images.map((pic) => ({ src: pic }));

  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        wrapperTag="ul"
        onSlideChange={onSlideChange}
      >
        {images.map((pic, index) => (
          <SwiperSlide
            key={nanoid()}
            tag="li"
            onClick={openFullScreen}
          >
            <div className="relative w-full max-h-[435px] overflow-hidden before:content-[''] before:block before:pb-[100%] before:h-full cursor-pointer hover:scale-110 transition duration-1000">
              <Image
                src={pic}
                fill
                alt={`project plan # ${index + 1}`}
                style={{
                  objectFit: 'contain',
                }}
                sizes="100vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Lightbox
        open={toggler}
        index={currentIndex.current}
        close={() => setToggler(false)}
        slides={picsFull}
      />
    </>
  );
};

export default ProjectsSwiper;
