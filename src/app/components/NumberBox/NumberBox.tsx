import React from 'react';
import Image from 'next/image';
import styles from "./NumberBox.module.css";
import ExpandoBox from '../ExpandoBox/ExpandoBox';

interface NumberBoxProps {
  number: number;
  outOf: number;
  comment: string;
  image: string;
  expandoData: ExpandoData;
  isExpanded: boolean;
  onToggle: () => void;
}

interface ExpandoData {
  people?: {
    public?: string[];
    private?: string[];
    halfhearted?: string[];
    support?: string[];
    silent?: string[];
  }
}

const NumberBox: React.FC<NumberBoxProps> = ({
  number,
  outOf,
  comment,
  image,
  expandoData,
  isExpanded,
  onToggle
}) => {
  return (
    <div className={`${styles.container} ${isExpanded ? styles.expanded : ''}`} onClick={onToggle}>
      {!isExpanded ? (
        <div className={styles.box}>
          <div className={styles.content}>
            <div className={styles.number}>{number}</div>
            <div className={styles.description}>
              <p>out of {outOf}</p>
              <p>{comment}</p>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image src={image} alt="Hover image" layout="fill" objectFit="cover" />
          </div>
        </div>
      ) : (
        <ExpandoBox data={{
          number,
          outOf,
          comment,
          image,
          expandoData}} onClose={onToggle} />
      )}
    </div>
  );
};

export default NumberBox;