import React, { useState, useEffect } from 'react';
import '../Style/Slideshow.css'; // Create this CSS file for styling
import imgOne from '../Assets/imgOne.jpg';
import imgTwo from '../Assets/imgTwo.jpg';
import imgThree from '../Assets/imgThree.jpg';
import imgFour from '../Assets/imgFour.jpg';
import imgFive from '../Assets/imgFive.jpg';
import imgSix from '../Assets/imgSix.png';
import imgSeven from '../Assets/imgSeven.jpg';
import imgEight from '../Assets/imgEight.jpg';
import imgNine from '../Assets/imgNine.jpg';
import imgTen from '../Assets/imgTen.jpg';

const images = [imgOne, 
                imgTwo, 
                imgThree, 
                imgFour, 
                imgFive,
                imgSix, 
                imgSeven, 
                imgEight, 
                imgNine, 
                imgTen, 
            ]; 

const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change the interval (in milliseconds) as needed

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    // Set the background image when the currentImageIndex changes
    const container = document.querySelector('.slideshow');
    container.style.backgroundImage = `url(${images[currentImageIndex]})`;
  }, [currentImageIndex]);

  return (
        <div className="slideshow"></div>
  );
};

export default Slideshow;
