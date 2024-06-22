// import React, { useState } from 'react';

// const MovieCard = ({ movieobj, poster_path, name, handleWatchList, handleWatchListRemove, watchlist }) => {
//   const [isInWatchlist, setIsInWatchlist] = useState(doesContain(movieobj));

//   function doesContain(movieobj) {
//     return watchlist.some(movie => movie.id === movieobj.id);
//   }

//   const handleToggleWatchlist = () => {
//     if (isInWatchlist) {
//       handleWatchListRemove(movieobj);
//     } else {
//       handleWatchList(movieobj);
//     }
//     setIsInWatchlist(!isInWatchlist);
//   };

//   return (
//     <div className='relative h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-105 duration-300 cursor-pointer flex flex-col'
//       style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}>
//       {isInWatchlist ? (
//         <div onClick={handleToggleWatchlist} className='absolute top-0 right-0 m-4 flex justify-center h-9 w-9 items-center rounded bg-gray-900/60 cursor-pointer text-white'>
//           &#10007;
//         </div>
//       ) : (
//         <div onClick={handleToggleWatchlist} className='absolute top-0 right-0 m-4 flex justify-center h-9 w-9 items-center rounded bg-gray-900/60 cursor-pointer'>
//           &#129505;
//         </div>
//       )}

//       <div className='absolute bottom-0 w-full text-center p-2 bg-gradient-to-t from-black via-transparent to-transparent rounded-b-xl'>
//         <div className='text-white text-lg font-semibold bg-gray-900/60 p-2 rounded-b-xl'>
//           {name}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default MovieCard;




import React, { useState } from 'react';
import { HeartIcon } from '@heroicons/react/outline'; // Importing heart icon from HeroIcons v1

const MovieCard = ({ movieobj, poster_path, name, handleWatchList, handleWatchListRemove, watchlist }) => {
  const [isInWatchlist, setIsInWatchlist] = useState(doesContain(movieobj));

  function doesContain(movieobj) {
    return watchlist.some(movie => movie.id === movieobj.id);
  }

  const handleToggleWatchlist = () => {
    if (isInWatchlist) {
      handleWatchListRemove(movieobj);
    } else {
      handleWatchList(movieobj);
    }
    setIsInWatchlist(!isInWatchlist);
  };

  return (
    <div className='relative h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-105 duration-300 cursor-pointer overflow-hidden'>
      <div
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}
        className='h-full w-full bg-center bg-cover transition-transform transform-gpu hover:scale-110'>
        <div className='absolute inset-0 bg-black opacity-0 hover:opacity-60 transition-opacity duration-300'></div>
        <div className='absolute top-0 right-0 m-4 flex justify-center items-center rounded-full bg-gray-900/60 text-white cursor-pointer hover:bg-red-500 transition duration-300'
          onClick={handleToggleWatchlist}>
          <HeartIcon className={`h-6 w-6 p-1 ${isInWatchlist ? 'text-red-500' : 'text-white'}`} />
        </div>
      </div>
      <div className='absolute bottom-0 left-0 right-0 p-4 bg-gray-900/60 text-white'>
        <p className='text-lg font-semibold'>{name}</p>
      </div>
    </div>
  )
}

export default MovieCard;
