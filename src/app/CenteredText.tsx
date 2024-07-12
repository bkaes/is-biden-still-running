"use client"; // Add this at the top of your file
import React, { useState, useEffect } from 'react';

const CenteredText: React.FC = () => {
  const [randomText, setRandomText] = useState('');

  useEffect(() => {
    const texts = ['Yeah...', 'Unfortunately', 'yes :(', "What's left of him"];
    const randomIndex = Math.floor(Math.random() * texts.length);
    setRandomText(texts[randomIndex]);
  }, []);

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    textAlign: 'center',
  };

  const textStyle: React.CSSProperties = {
    fontSize: 'min(max(60px, 5vw), 80px)',
    fontWeight: 300,
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div style={containerStyle}>
      <h1 style={textStyle}>
        {randomText}
      </h1>
    </div>
  );
};

export default CenteredText;
