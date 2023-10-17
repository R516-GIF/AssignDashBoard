import React, { useState } from 'react';
import './Updates.css';

// Import your images
import image1 from './profile1.jpg';
import image2 from './profile2.jpg'; 
import image4 from './profile4.jpg';

const images = [image1,image2, image4];

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const handleDotClick = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="App">
      <div className="image-container">
        <img src={images[currentPage]} alt={`Image ${currentPage + 1}`} />
      </div>
      <div className="pagination">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentPage === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default App;
