import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Adjusted padding for different screen sizes */}
        <div className="text-center text-xs sm:text-sm"> {/* Adjusted text size for different screen sizes */}
          <p>&copy; {new Date().getFullYear()} Movix. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
