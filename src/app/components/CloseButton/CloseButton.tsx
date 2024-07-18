import React from 'react';
import styles from './CloseButton.module.css';

interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.closeButton} onClick={onClick} aria-label="Close">
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M11.2929,3.29289 C11.6834,2.90237 12.3166,2.90237 12.7071,3.29289 C13.0976,3.68342 13.0976,4.31658 12.7071,4.70711 L9.41421,8 L12.7071,11.2929 C13.0976,11.6834 13.0976,12.3166 12.7071,12.7071 C12.3166,13.0976 11.6834,13.0976 11.2929,12.7071 L8,9.41421 L4.70711,12.7071 C4.31658,13.0976 3.68342,13.0976 3.29289,12.7071 C2.90237,12.3166 2.90237,11.6834 3.29289,11.2929 L6.58579,8 L3.29289,4.70711 C2.90237,4.31658 2.90237,3.68342 3.29289,3.29289 C3.68342,2.90237 4.31658,2.90237 4.70711,3.29289 L8,6.58579 L11.2929,3.29289 Z" />
      </svg>
    </button>
  );
};

export default CloseButton;