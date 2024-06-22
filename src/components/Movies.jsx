import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';
import Pagination from './Pagination';

const Movies = ({ handleWatchList, handleWatchListRemove, watchlist }) => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo === 1) {
      setPageNo(1);
    } else {
      setPageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=20a618648b2afd5e157d5386f46475b1&language=en-US&page=${pageNo}`)
      .then(res => {
        setMovies(res.data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [pageNo]);

  return (
    <div className='max-w-screen-xl mx-auto px-4'>
      <div className='text-3xl font-bold text-center mt-5 sm:text-4xl md:text-5xl'>
        Trending Movies
      </div>
      <div className='flex flex-wrap justify-center gap-4 sm:gap-7 mt-6'>
        {movies.map((movieobj) => (
          <MovieCard
            key={movieobj.id}
            movieobj={movieobj}
            poster_path={movieobj.poster_path}
            name={movieobj.original_title}
            handleWatchList={handleWatchList}
            handleWatchListRemove={handleWatchListRemove}
            watchlist={watchlist}
          />
        ))}
      </div>
      <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  );
};

export default Movies;
