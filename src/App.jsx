import { useState } from 'react';
import Cat from './components/Cat.jsx';
import confetti from 'canvas-confetti';
import './App.css';

function App() {
  const [giftOpened, setGiftOpened] = useState(false);

  const handleOpenGift = () => {
    setGiftOpened(true);
    confetti({
      particleCount: 200,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="bg-red-500 min-h-screen w-full relative overflow-hidden flex flex-col items-center justify-start p-8">
      <h1 className="text-center text-white text-5xl md:text-6xl mt-10">
        Happy Birthday, U Duh Duh! 🎉
      </h1>

      {/* Cat decorations */}
      {Array.from({ length: 7 }).map((_, i) => (
        <Cat key={i} />
      ))}

      {/* Open Gift Button */}
      {!giftOpened && (
        <div className="flex justify-center mt-16">
          <button
            className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-500 transition"
            onClick={handleOpenGift}
          >
            Open Gift 🎁
          </button>
        </div>
      )}

      {/* Message after opening gift */}
      {giftOpened && (
        <p className="text-center text-white text-3xl md:text-4xl mt-16 animate-bounce">
          Surprise! 😻 U Duh Duh!
        </p>
      )}
    </div>
  );
}

export default App;