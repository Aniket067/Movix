import React from 'react';

const Banner = () => {
  return (
    <div className='h-[40vh] md:h-[77vh] bg-cover bg-center flex items-end relative' style={{backgroundImage:`url(https://imgs.search.brave.com/3KnMO89AH8a9jpkmFpig1xH4Odaqrsp-yuc9bRVKcKc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJiYXQuY29t/L2ltZy84MjU4OS1m/cmVlLWd1eS0yMDIw/LW1vdmllLXBvc3Rl/ci1oZC1tb3ZpZXMt/NGstd2FsbHBhcGVy/LWltYWdlLmpwZw)`}}>
      <div className='absolute inset-0 bg-gradient-to-t from-blue to-transparent'></div>
      <div className='relative text-white text-sm md:text-xl lg:text-xl w-full text-center p-3 md:p-6 font-bold drop-shadow-lg'>
         Free Guy
      </div>
    </div>
  );
};

export default Banner;
