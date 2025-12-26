import { useState } from "react";

export type Picture = {
    name: string;
    picture: string;
};

type PicturePileProps = {
  pictures: Picture[];
}

export function PicturePile({ pictures }: PicturePileProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    if (currentIndex < pictures.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to first image
    }
  };

  // Generate random rotations for each picture (except the top one)
  const getRotation = (index: number) => {
    if (index === currentIndex) return 0; // Top picture is straight
    const rotations = [-8, -5, -3, 3, 5, 8, -6, 6];
    return rotations[index % rotations.length];
  };

  return (
    <div className="relative w-[400px] h-[400px]">
      {pictures.map((picture, index) => {
        const isVisible = index >= currentIndex;
        const stackOrder = index - currentIndex;
        
        return (
          <div
            key={index}
            className={`absolute font-bold inset-0 transition-all duration-500 ${
              isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            style={{
              zIndex: pictures.length - index,
              transform: `rotate(${getRotation(index)}deg) translateY(${stackOrder * 2}px)`,
            }}
          >
            <div 
              className="border-8 border-white bg-white shadow-2xl cursor-pointer hover:scale-105 transition-transform"
              onClick={handleClick}
            >
              <img
                src={picture.picture}
                alt={picture.name}
                className="w-[full] h-[full] object-cover"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = "/client/images/Israel_Trejo.jpg";
                }}
              />
              <div className="bg-white p-2 text-center text-black text-2xl" style={{ fontFamily: "'Great Vibes', cursive" }}>
                {picture.name}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}