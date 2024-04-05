import React, { useState, useEffect } from 'react';
import ImageDisplay from './ImageDisplay';
import ScoreBoard from './ScoreBoard';
import HighScoreBoard from './HighScoreBoard';

//Testkoordinaten
const figures = [
  { id: 'figur1', x: 100, y: 100, width: 300000, height: 300000, hint: "Finde den Linux Pinguin!" },
  { id: 'figur2', x: 100, y: 100, width: 300000, height: 300000, hint: "Finde den Creeper!" },
  { id: 'figur3', x: 100, y: 100, width: 300000, height: 300000, hint: "Finde den mann beim ATM!" },
  { id: 'figur4', x: 100, y: 100, width: 300000, height: 300000, hint: "Finde den 3D-Drucker!" },
  { id: 'figur5', x: 100, y: 100, width: 300000, height: 300000, hint: "Finde die Schachspieler!" },
];

const Game: React.FC = () => {
  const [score, setScore] = useState(0);
  const [currentTargetIndex, setCurrentTargetIndex] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (gameStarted) {
      const startTime = Date.now();
      const timer = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [gameStarted]);

  const handleFind = (id: string) => {
    if (id === figures[currentTargetIndex].id) {
      setScore(prevScore => prevScore + 1);
      const nextTargetIndex = currentTargetIndex + 1;
      if (nextTargetIndex < figures.length) {
        setCurrentTargetIndex(nextTargetIndex);
      } else {
        alert(`Spiel beendet! Zeit: ${elapsedTime} Sekunden`);
        const highScores = JSON.parse(localStorage.getItem('highScores') || '[]');
        const updatedHighScores = [...highScores, elapsedTime].sort((a, b) => a - b).slice(0, 5);
        localStorage.setItem('highScores', JSON.stringify(updatedHighScores));
        setGameStarted(false); 
      }
    }
  };

  const startGame = () => {
    setGameStarted(true);
    setCurrentTargetIndex(0);
    setScore(0);
    setElapsedTime(0);
  };

  const resetGame = () => {
    setGameStarted(false);
    setScore(0);
    setCurrentTargetIndex(0);
    setElapsedTime(0);
  };

  return (
    <div>
      {gameStarted ? (
        <>
          <h1>{figures[currentTargetIndex].hint}</h1>
          <ScoreBoard score={score} total={figures.length} />
          <p>Zeit: {elapsedTime} Sekunden</p>
          <ImageDisplay figures={[figures[currentTargetIndex]]} onFind={handleFind} />
          <button onClick={resetGame}>Neustart</button>
        </>
      ) : (
        <>
          <button onClick={startGame}>Spiel starten</button>
          <HighScoreBoard />
        </>
      )}
    </div>
  );
};

export default Game;
