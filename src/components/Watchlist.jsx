// // import React, { useEffect, useState } from 'react';
// // import genres from '../Utilitiy/genre';

// // const Watchlist = ({ watchlist ,setWatchList }) => {
// //   const [search, setSearch] = useState("")
// //   const handleSearch = (e) => {
// //     setSearch(e.target.value)
// //   }


// //   let sortInc=()=>{
// //    let sortIncrease=watchlist.sort((movieA,movieB)=>{
// //           return movieA.vote_average - movieB.vote_average
// //     })
// //     setWatchList([...sortIncrease])
// //   }
// //   let sortDef=()=>{
// //    let sortDecrease= watchlist.sort((movieA,movieB)=>{
// //           return movieB.vote_average - movieA.vote_average
// //     })
// //     setWatchList([...sortDecrease])
// //   }



// //   return (
// //     <>
// //       <div className='flex justify-center flex-wrap m-4'>
// //         <div className=' flex justify-center bg-red-300 h-[3rem] w-[9rem] rounded-xl items-center mx-4'>Actions</div>
// //         <div className=' flex justify-center bg-green-300 h-[3rem] w-[9rem] rounded-xl items-center'>Drama</div>
// //         <div className=' flex justify-center bg-blue-300 h-[3rem] w-[9rem] rounded-xl items-center mx-4'>Drama</div>
// //       </div>
// //       <div className='flex flex-col items-center justify-center my-4 px-4'>
// //         <input onChange={handleSearch}
// //           type="text"
// //           className='border-2 border-gray-300 p-2 px-4 outline-none rounded-lg shadow-sm focus:border-red-400 focus:shadow-md transition duration-300 w-full max-w-md'
// //           placeholder="Enter text"
// //         />
// //       </div>

// //       <div className='rounded-lg overflow-hidden border border-gray-200 m-4 md:m-8 shadow-lg'>
// //         <table className='w-full text-gray-700 text-center'>
// //           <thead className='bg-gray-200'>
// //             <tr>
// //             <th className='py-3 px-6'>Name</th>
// // <th className='py-3 px-6 flex justify-center items-center space-x-2'>
// //   <div onClick={sortInc} className='p-1'>
// //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
// //       <path d="M12 4L12 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
// //       <path d="M17 9C17 9 13.3176 4 12 4C10.6824 4 7 9 7 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
// //     </svg>
// //   </div>
// //   <div className='px-2'>Ratings</div>
// //   <div onClick={sortDef} className='p-1'>
// //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
// //       <path d="M12 20L12 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
// //       <path d="M17 15C17 15 13.3176 20 12 20C10.6824 20 7 15 7 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
// //     </svg>
// //   </div>
// // </th>

// //               <th className='py-3 px-6'>Popularity</th>
// //               <th className='py-3 px-6'>{genres[(movieobj).genres[0]]}</th>
// //               <th className='py-3 px-6'>Actions</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {watchlist.filter((movieobj) => {
// //               return movieobj.title.toLowerCase().includes(search.toLocaleLowerCase())
// //             }).map((movieobj) => {
// //               return <tr className='border-b hover:bg-gray-100 transition duration-300'>
// //                 <td className='flex flex-col md:flex-row items-center px-6 py-4'>
// //                   <img className='h-20 w-28 rounded-lg shadow-sm mb-2 md:mb-0' src={`https://image.tmdb.org/t/p/original/${movieobj.poster_path}`} alt="Angry Birds" />
// //                   <div className='mx-4 text-left'>{movieobj.title}</div>
// //                 </td>
// //                 <td className='py-4'>{movieobj.vote_average}</td>
// //                 <td className='py-4'>{movieobj.popularity}</td>
// //                 <td className='py-4'>Drama</td>
// //                 <td className='py-4 text-red-600 cursor-pointer hover:underline'>Delete</td>
// //               </tr>
// //             })}


// //           </tbody>
// //         </table>
// //       </div>
// //     </>
// //   );
// // }

// // export default Watchlist;



// import React, { useState } from 'react';
// import genres from '../Utilitiy/genre'; // Ensure correct path to your genres data

// const Watchlist = ({ watchlist, setWatchList }) => {
//   const [search, setSearch] = useState('');
//   const [selectedGenres, setSelectedGenres] = useState([]);

//   const handleSearch = (e) => {
//     setSearch(e.target.value);
//   };

//   const toggleGenre = (genreId) => {
//     if (selectedGenres.includes(genreId)) {
//       setSelectedGenres(selectedGenres.filter(id => id !== genreId));
//     } else {
//       if (selectedGenres.length < 6) {
//         setSelectedGenres([...selectedGenres, genreId]);
//       }
//     }
//   };

//   const getGenreNames = (genreIds) => {
//     return genreIds.map(id => {
//       const genre = genres.find(g => g.id === id);
//       return genre ? genre.name : '';
//     }).join(', ');
//   };

//   const sortInc = () => {
//     const sortedList = [...watchlist].sort((a, b) => a.vote_average - b.vote_average);
//     setWatchList(sortedList);
//   };

//   const sortDef = () => {
//     const sortedList = [...watchlist].sort((a, b) => b.vote_average - a.vote_average);
//     setWatchList(sortedList);
//   };

//   const handleDelete = (id) => {
//     const updatedList = watchlist.filter(movie => movie.id !== id);
//     setWatchList(updatedList);
//   };

//   const filterByGenre = (movie) => {
//     if (selectedGenres.length === 0) {
//       return true; // No genres selected, show all movies
//     }
//     return movie.genre_ids.some(id => selectedGenres.includes(id));
//   };

//   const checkGenreIdMatch = (genreId) => {
//     return selectedGenres.includes(genreId);
//   };

//   return (
//     <>
//       <div className='flex justify-center flex-wrap m-4'>
//         <div className='cursor-pointer flex justify-center bg-red-300 h-[3rem] w-[9rem] rounded-xl items-center mx-2 my-2'>Actions</div>
//         <div className={`cursor-pointer flex justify-center ${checkGenreIdMatch(18) ? 'border border-green-600' : 'bg-green-300'} h-[3rem] w-[9rem] rounded-xl items-center mx-2 my-2`} onClick={() => toggleGenre(18)}>Drama</div>
//         <div className={`cursor-pointer flex justify-center ${checkGenreIdMatch(28) ? 'border border-blue-600' : 'bg-blue-300'} h-[3rem] w-[9rem] rounded-xl items-center mx-2 my-2`} onClick={() => toggleGenre(28)}>Action</div>
//         <div className={`cursor-pointer flex justify-center ${checkGenreIdMatch(35) ? 'border border-yellow-600' : 'bg-yellow-300'} h-[3rem] w-[9rem] rounded-xl items-center mx-2 my-2`} onClick={() => toggleGenre(35)}>Comedy</div>
//         <div className={`cursor-pointer flex justify-center ${checkGenreIdMatch(10749) ? 'border border-indigo-600' : 'bg-indigo-300'} h-[3rem] w-[9rem] rounded-xl items-center mx-2 my-2`} onClick={() => toggleGenre(10749)}>Romance</div>
//         <div className={`cursor-pointer flex justify-center ${checkGenreIdMatch(878) ? 'border border-purple-600' : 'bg-purple-300'} h-[3rem] w-[9rem] rounded-xl items-center mx-2 my-2`} onClick={() => toggleGenre(878)}>Sci-Fi</div>
//         <div className={`cursor-pointer flex justify-center ${checkGenreIdMatch(53) ? 'border border-pink-600' : 'bg-pink-300'} h-[3rem] w-[9rem] rounded-xl items-center mx-2 my-2`} onClick={() => toggleGenre(53)}>Thriller</div>
//       </div>
      
//       <div className='flex flex-col items-center justify-center my-4 px-4'>
//         <input
//           onChange={handleSearch}
//           type="text"
//           className='border-2 border-gray-300 p-2 px-4 outline-none rounded-lg shadow-sm focus:border-red-400 focus:shadow-md transition duration-300 w-full max-w-md'
//           placeholder="Enter text"
//         />
//       </div>

//       <div className='rounded-lg overflow-hidden border border-gray-200 m-4 md:m-8 shadow-lg'>
//         <table className='w-full text-gray-700 text-center'>
//           <thead className='bg-gray-200'>
//             <tr>
//               <th className='py-3 px-6'>Name</th>
//               <th className='py-3 px-6 flex justify-center items-center space-x-2'>
//                 <div onClick={sortInc} className='p-1 cursor-pointer'>
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M12 4L12 20" />
//                     <path d="M17 9C17 9 13.3176 4 12 4C10.6824 4 7 9 7 9" />
//                   </svg>
//                 </div>
//                 <div className='px-2'>Ratings</div>
//                 <div onClick={sortDef} className='p-1 cursor-pointer'>
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M12 20L12 4" />
//                     <path d="M17 15C17 15 13.3176 20 12 20C10.6824 20 7 15 7 15" />
//                   </svg>
//                 </div>
//               </th>
//               <th className='py-3 px-6'>Popularity</th>
//               <th className='py-3 px-6'>Genre</th>
//               <th className='py-3 px-6'>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {watchlist
//               .filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()) && filterByGenre(movie))
//               .map(movie => (
//                 <tr key={movie.id} className='border-b hover:bg-gray-100 transition duration-300'>
//                   <td className='flex flex-col md:flex-row items-center px-6 py-4'>
//                     <img className='h-20 w-28 rounded-lg shadow-sm mb-2 md:mb-0' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
//                     <div className='mx-4 text-left'>{movie.title}</div>
//                   </td>
//                   <td className='py-4'>{movie.vote_average}</td>
//                   <td className='py-4'>{movie.popularity}</td>
//                   <td className='py-4'>{getGenreNames(movie.genre_ids)}</td>
//                   <td className='py-4 text-red-600 cursor-pointer hover:underline' onClick={() => handleDelete(movie.id)}>Delete</td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }

// export default Watchlist;





import React, { useState } from 'react';
import genres from '../Utilitiy/genre'; // Ensure correct path to your genres data

const Watchlist = ({ watchlist, setWatchList }) => {
  const [search, setSearch] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const toggleGenre = (genreId) => {
    if (selectedGenres.includes(genreId)) {
      setSelectedGenres(selectedGenres.filter(id => id !== genreId));
    } else {
      if (selectedGenres.length < 6) {
        setSelectedGenres([...selectedGenres, genreId]);
      }
    }
  };

  const getGenreNames = (genreIds) => {
    return genreIds.map(id => {
      const genre = genres.find(g => g.id === id);
      return genre ? genre.name : '';
    }).join(', ');
  };

  const sortInc = () => {
    const sortedList = [...watchlist].sort((a, b) => a.vote_average - b.vote_average);
    setWatchList(sortedList);
  };

  const sortDef = () => {
    const sortedList = [...watchlist].sort((a, b) => b.vote_average - a.vote_average);
    setWatchList(sortedList);
  };

  const handleDelete = (id) => {
    const updatedList = watchlist.filter(movie => movie.id !== id);
    setWatchList(updatedList);
  };

  const filterByGenre = (movie) => {
    if (selectedGenres.length === 0) {
      return true; // No genres selected, show all movies
    }
    return movie.genre_ids.some(id => selectedGenres.includes(id));
  };

  const checkGenreIdMatch = (genreId) => {
    return selectedGenres.includes(genreId);
  };

  return (
    <>
      <div className='flex flex-wrap justify-center gap-2 m-4'>
        <div className='cursor-pointer flex justify-center bg-red-300 h-[3rem] w-[9rem] rounded-xl items-center my-2' onClick={() => toggleGenre(18)}>Drama</div>
        <div className={`cursor-pointer flex justify-center ${checkGenreIdMatch(18) ? 'border border-green-600' : 'bg-green-300'} h-[3rem] w-[9rem] rounded-xl items-center my-2`} onClick={() => toggleGenre(28)}>Action</div>
        <div className={`cursor-pointer flex justify-center ${checkGenreIdMatch(35) ? 'border border-yellow-600' : 'bg-yellow-300'} h-[3rem] w-[9rem] rounded-xl items-center my-2`} onClick={() => toggleGenre(35)}>Comedy</div>
        <div className={`cursor-pointer flex justify-center ${checkGenreIdMatch(10749) ? 'border border-indigo-600' : 'bg-indigo-300'} h-[3rem] w-[9rem] rounded-xl items-center my-2`} onClick={() => toggleGenre(10749)}>Romance</div>
        <div className={`cursor-pointer flex justify-center ${checkGenreIdMatch(878) ? 'border border-purple-600' : 'bg-purple-300'} h-[3rem] w-[9rem] rounded-xl items-center my-2`} onClick={() => toggleGenre(878)}>Sci-Fi</div>
        <div className={`cursor-pointer flex justify-center ${checkGenreIdMatch(53) ? 'border border-pink-600' : 'bg-pink-300'} h-[3rem] w-[9rem] rounded-xl items-center my-2`} onClick={() => toggleGenre(53)}>Thriller</div>
      </div>
      
      <div className='flex items-center justify-center my-4 px-4'>
        <input
          onChange={handleSearch}
          type="text"
          className='border-2 border-gray-300 p-2 px-4 outline-none rounded-lg shadow-sm focus:border-red-400 focus:shadow-md transition duration-300 w-full max-w-md'
          placeholder="Search by title"
        />
      </div>

      <div className='rounded-lg overflow-hidden border border-gray-200 m-4 md:m-8 shadow-lg'>
        <div className='overflow-x-auto'>
          <table className='w-full text-gray-700 text-center'>
            <thead className='bg-gray-200'>
              <tr>
                <th className='py-3 px-6'>Name</th>
                <th className='py-3 px-6 flex justify-center items-center space-x-2'>
                  <div onClick={sortInc} className='p-1 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 4L12 20" />
                      <path d="M17 9C17 9 13.3176 4 12 4C10.6824 4 7 9 7 9" />
                    </svg>
                  </div>
                  <div className='px-2'>Ratings</div>
                  <div onClick={sortDef} className='p-1 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20L12 4" />
                      <path d="M17 15C17 15 13.3176 20 12 20C10.6824 20 7 15 7 15" />
                    </svg>
                  </div>
                </th>
                <th className='py-3 px-6'>Popularity</th>
                <th className='py-3 px-6'>Genre</th>
                <th className='py-3 px-6'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {watchlist
                .filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()) && filterByGenre(movie))
                .map(movie => (
                  <tr key={movie.id} className='border-b hover:bg-gray-100 transition duration-300'>
                    <td className='flex flex-col md:flex-row items-center px-6 py-4'>
                      <img className='h-20 w-28 rounded-lg shadow-sm mb-2 md:mb-0' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                      <div className='mx-4 text-left'>{movie.title}</div>
                    </td>
                    <td className='py-4'>{movie.vote_average}</td>
                    <td className='py-4'>{movie.popularity}</td>
                    <td className='py-4'>{getGenreNames(movie.genre_ids)}</td>
                    <td className='py-4 text-red-600 cursor-pointer hover:underline' onClick={() => handleDelete(movie.id)}>Delete</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Watchlist;
