'use client';

import { Direction } from '@/constants/swiperButton.constant';
import { nanoid } from 'nanoid';
import Image from 'next/image';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Lightbox } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import CONTENT from '../../../public/data/gallery.json';
import Container from '../Container/Container.component';
import CarrouselItem from '../Hero/CarrouselItem.component';
import SwiperButton from '../Hero/SwiperButton.component';
import PageWrapper from '../PageWrapper/PageWrapper.component';

const getShowedPages = (
  data: typeof CONTENT,
  start: number,
  end: number
): typeof CONTENT => {
  return data.slice(start, end);
};

const GalleryList = () => {
  const amountOnPage = 10;
  const pagesAmount = Math.ceil(CONTENT.length / 10);
  const [pageElements, setPageElements] = useState<typeof CONTENT | null>(null);
  const [toggler, setToggler] = useState(false);
  const [pageInfo, setPageInfo] = useState({
    currentSlide: 1,
    itemStart: 0,
    itemEnd: amountOnPage,
  });

  const currentIndex = useRef(1);

  const getCollection = useCallback(() => {
    const result = getShowedPages(
      CONTENT,
      pageInfo.itemStart,
      pageInfo.itemEnd
    );
    setPageElements(result);
  }, [pageInfo.itemStart, pageInfo.itemEnd]);

  useEffect(() => {
    getCollection();
  }, [getCollection]);

  const handleSliderClick = (e: React.MouseEvent): void => {
    const target = e.currentTarget as HTMLButtonElement;
    const name = target.name as keyof typeof Direction;
    const slideActions = {
      [Direction.RIGHT]: () => {
        setPageInfo((prev) => {
          if (prev.currentSlide >= pagesAmount) return prev;
          return {
            currentSlide: prev.currentSlide + 1,
            itemStart: prev.itemStart + amountOnPage,
            itemEnd: prev.itemEnd + amountOnPage,
          };
        });
      },
      [Direction.LEFT]: () => {
        setPageInfo((prev) => {
          if (prev.currentSlide - 1 <= 0) return prev;
          return {
            currentSlide: prev.currentSlide - 1,
            itemStart: prev.itemStart - amountOnPage,
            itemEnd: prev.itemEnd - amountOnPage,
          };
        });
      },
    };
    slideActions[name]();
    window.scrollTo({
      top: 102,
      left: 0,
      behavior: 'smooth',
    });
  };

  const picsFull = pageElements?.map((item) => ({ src: item.full }));

  const handleOpenPic = (e: React.MouseEvent<HTMLElement>) => {
    setToggler(true);
    const findIndex = pageElements?.findIndex(
      (pic) => pic.id === e.currentTarget.dataset.id
    ) as number;

    if (findIndex !== -1) {
      currentIndex.current = findIndex;
    }
  };

  return (
    <Container>
      <div className="container m-auto pt-[63px] pb-[104px]">
        <Lightbox
          open={toggler}
          index={currentIndex.current}
          close={() => setToggler(false)}
          slides={picsFull}
        />
        <PageWrapper
          title="photo"
          underTitle="Gallery"
          wrapperClassName="flex gap-[30px] flex-wrap justify-center md:justify-start pt-[30px] pb-[60px] border-t border-gray-f2"
        >
          {pageElements?.map((pic) => (
            <li
              className="relative w-full max-w-[210px] min-h-[260px] overflow-hidden cursor-pointer"
              key={nanoid()}
              onClick={handleOpenPic}
              data-id={pic.id}
            >
              <Image
                src={pic.full}
                fill
                alt={pic.description}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-auto object-cover hover:scale-110 transition-all duration-700"
              />
            </li>
          ))}
        </PageWrapper>

        <div className="flex flex-row-reverse gap-5 justify-center sm:justify-end items-center flex-wrap">
          <div className="flex gap-5">
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
            itemCurrent={pageInfo.currentSlide}
            itemAmount={pagesAmount}
          />
        </div>
      </div>
    </Container>
  );
};

export default GalleryList;
