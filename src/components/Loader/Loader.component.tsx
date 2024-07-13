import React from 'react';
import { Vortex } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="flex items-center justify-start h-full pb-[20%] pt-[20%]">
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{ margin: '0 auto' }}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </div>
  );
};

export default Loader;
