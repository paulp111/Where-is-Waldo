import React, { useState, useEffect } from 'react';

const HighScoreBoard: React.FC = () => {
  const [highScores, setHighScores] = useState<number[]>([]);

  useEffect(() => {
    loadHighScores();
  }, []);

  const loadHighScores = () => {
    const loadedHighScores = JSON.parse(localStorage.getItem('highScores') || '[]');
    setHighScores(loadedHighScores);
  };

  const resetHighScores = () => {
    localStorage.removeItem('highScores'); 
    setHighScores([]); 
  };

  return (
    <div>
      <h2>Bestenliste</h2>
      <ul>
        {highScores.map((time, index) => (
          <li key={index}>Zeit: {time} Sekunden</li>
        ))}
      </ul>
      <button onClick={resetHighScores}>Bestzeiten zurücksetzen</button>
    </div>
  );
};

export default HighScoreBoard;
