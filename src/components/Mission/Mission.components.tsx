import { nanoid } from 'nanoid';
import React from 'react';

import CONTENT from '../../../public/data/mission.json';
import Container from '../Container/Container.component';
import Title from '../Title/Title.component';
import MissionItem from './MissionItem.component';

const Mission = () => {
  const { title, text } = CONTENT;
  return (
    <Container sx="mb-[120px]">
      <div className="container mx-auto">
        <Title>{title}</Title>
        <ul className="flex justify-center lg:justify-between items-center flex-wrap p-2 max-w-[768px] lg:max-w-full">
          {text.map((item, index) => (
            <MissionItem
              key={nanoid()}
              text={item}
              order={index + 1}
            />
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Mission;
