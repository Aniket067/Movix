// import React from 'react';
// import logo from '../assets/movies-app.png';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <div className='flex items-center justify-between bg-gray-900 p-4'>
//       <div className='flex items-center space-x-4'>
//         <img className='w-12 h-12' src={logo} alt="Movies App Logo" />
//         <Link to='/' className='text-white text-lg hover:text-red-500 transition duration-300'>Home</Link>
//         <Link to='/watchlist' className='text-white text-lg hover:text-red-500 transition duration-300' >Watchlist</Link>
//       </div>
//       {/* Responsive Menu Button */}
//       <div className='flex md:hidden'>
//         <button className='text-white focus:outline-none'>
//           <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
//             <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
//           </svg>
//         </button>
//       </div>
//       {/* Responsive Menu Items */}
//       <div className='hidden md:flex items-center space-x-4'>
//         <button className='bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300'>Sign In</button>
//         <button className='bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300'>Sign Up</button>
//       </div>
//     </div>
//   );
// };


// export default Navbar;


import React from 'react';
import logo from '../assets/movies-app.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between bg-gray-900 p-4'>
      <div className='flex items-center space-x-4'>
        <Link to='/'> {/* Wrap the logo with Link component */}
          <img className='w-12 h-12' src={logo} alt="Movies App Logo" />
        </Link>
        <Link to='/' className='text-white text-lg hover:text-red-500 transition duration-300'>Home</Link>
        <Link to='/watchlist' className='text-white text-lg hover:text-red-500 transition duration-300'>Watchlist</Link>
      </div>
      {/* Responsive Menu Button */}
      <div className='flex md:hidden'>
        <button className='text-white focus:outline-none'>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
          </svg>
        </button>
      </div>
      {/* Responsive Menu Items */}
      <div className='hidden md:flex items-center space-x-4'>
        <button className='bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300'>Sign In</button>
        <button className='bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300'>Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
