import React, { useState } from "react";
import wimmelbild from "../assets/Wimmelbild.jpg"; 

type Figure = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

type Props = {
  figures: Figure[];
  onFind: (id: string) => void;
};

const ImageDisplay: React.FC<Props> = ({ figures, onFind }) => {
  const [foundFigures, setFoundFigures] = useState<
    Array<{ id: string; x: number; y: number }>
  >([]);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
    const img = event.currentTarget;
    const rect = img.getBoundingClientRect();
    const x = event.clientX - rect.left; 
    const y = event.clientY - rect.top; 
    setCursorPos({ x, y });
  };

  const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
    const img = event.currentTarget;
    const rect = img.getBoundingClientRect();
    const scaleX = img.naturalWidth / rect.width;
    const scaleY = img.naturalHeight / rect.height;
    const x = (event.clientX - rect.left) * scaleX;
    const y = (event.clientY - rect.top) * scaleY;

    const foundFigure = figures.find(
      (figure) =>
        x >= figure.x &&
        x <= figure.x + figure.width &&
        y >= figure.y &&
        y <= figure.y + figure.height
    );

    if (foundFigure) {
      onFind(foundFigure.id);
      setFoundFigures((prev) => [
        ...prev,
        {
          id: foundFigure.id,
          x: event.clientX - rect.left,
          y: event.clientY - rect.top, 
        },
      ]);
    }
  };

  return (
    <div style={{ position: "relative" }} onMouseMove={handleMouseMove}>
      <img
        src={wimmelbild}
        alt="Wimmelbild"
        onClick={handleImageClick}
        style={{ width: "100%", height: "auto", cursor: "crosshair" }}
      />
      {foundFigures.map((found, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: `${found.x}px`,
            top: `${found.y}px`,
            width: "30px", 
            height: "30px", 
            borderRadius: "50%",
            border: "2px solid red",
            transform: "translate(-50%, -50%)", 
            pointerEvents: "none",
          }}
        />
      ))}
      <div
        style={{
          position: "absolute",
          left: `${cursorPos.x + 10}px`,
          top: `${cursorPos.y}px`,
          color: "red",
          fontWeight: "bold",
          backgroundColor: "rgba(255, 255, 255, 0.75)",
          padding: "2px 5px",
          transform: "translateY(-100%)",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 100,
        }}
      >
        X: {Math.round(cursorPos.x)}, Y: {Math.round(cursorPos.y)}
      </div>
    </div>
  );
};

export default ImageDisplay;
