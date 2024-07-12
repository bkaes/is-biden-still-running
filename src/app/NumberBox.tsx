import React from 'react';
import styles from "./page.module.css";

const NumberBox: React.FC<{ number: number; outOf: number; comment: string }> = ({ number, outOf, comment }) => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const boxStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#3b82f6',
    color: 'white',
    fontWeight: 'bold',
    width: '100px',
    height: '100px',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.5rem',
  };

  const numberStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    lineHeight: 1,
  };

  const outOfStyle: React.CSSProperties = {
    fontSize: '0.8rem',
    marginTop: '0.2rem',
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <div style={numberStyle}>
          {number}
        </div>
        <div style={outOfStyle}>
          out of {outOf}
        </div>
      </div>
      <p className={styles.description}>
        {comment}
      </p>
    </div>
  );
};

export default NumberBox;