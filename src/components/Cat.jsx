import { useEffect, useState } from 'react';

// Array of different cat images for variety
const catImages = [
  "https://i.pinimg.com/736x/dc/e8/59/dce8591bf187016ffb24b291f8cf15e5.jpg",
  "https://i.pinimg.com/736x/b0/be/42/b0be42493d2e8d6e3cbf49e584f8bdac.jpg",
  "https://i.pinimg.com/736x/22/ad/a8/22ada887a10824b8ef8b15c2ed7a0218.jpg",
  "https://i.pinimg.com/736x/ba/0f/91/ba0f91d0040d834315d06a3b3cbca660.jpg",
  "https://i.pinimg.com/736x/9c/2e/b1/9c2eb1fa57818fd015bf1623e3de6092.jpg",
];

export default function Cat() {
  const [position, setPosition] = useState({ x: Math.random() * 80, y: Math.random() * 80 });
  const [rotation, setRotation] = useState(Math.random() * 360);
  const [img, setImg] = useState(catImages[Math.floor(Math.random() * catImages.length)]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({ x: Math.random() * 80, y: Math.random() * 80 });
      setRotation(Math.random() * 360);
      setImg(catImages[Math.floor(Math.random() * catImages.length)]);
    }, 3000); // Move every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <img
      src={img}
      alt="fun cat"
      className="w-16 h-16 absolute transition-all duration-1000"
      style={{
        top: `${position.y}%`,
        left: `${position.x}%`,
        transform: `rotate(${rotation}deg)`,
        maxWidth: 'calc(100% - 4rem)',
        maxHeight: 'calc(100% - 4rem)',
      }}
    />
  );
}