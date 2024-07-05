import React from 'react';
import { BsSlashLg } from 'react-icons/bs';


interface CarrouselItemProps {
  itemAmount: number;
  itemCurrent: number;
}

const CarrouselItem: React.FC<CarrouselItemProps> = ({
  itemAmount,
  itemCurrent,
}) => {
  return (
    <div className="flex gap-4 text-gray-bd text-xl">
      <span>0{itemCurrent}</span>
      <BsSlashLg />
      <span>0{itemAmount}</span>
    </div>
  );
};

export default CarrouselItem;