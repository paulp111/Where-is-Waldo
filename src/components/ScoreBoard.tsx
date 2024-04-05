import React from 'react';

type Props = {
  score: number; 
  total: number; 
};

const ScoreBoard: React.FC<Props> = ({ score, total }) => {
  return (
    <div>
      <p>{score} von {total} gefunden</p>
    </div>
  );
};

export default ScoreBoard;
