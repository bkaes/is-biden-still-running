"use client"
import React, { useState } from 'react';
import NumberBox from '../NumberBox/NumberBox';
import styles from './NumberBoxGrid.module.css';

interface ExpandoData {
  people?: {
    public?: string[];
    private?: string[];
    halfhearted?: string[];
    silent?: string[];
  }
}

interface BoxData {
  id: string;
  number: number;
  outOf: number;
  comment: string;
  image: string;
  expandoData: ExpandoData;
}

interface NumberBoxGridProps {
  boxes: BoxData[];
}

const NumberBoxGrid: React.FC<NumberBoxGridProps> = ({ boxes }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleExpand = (id: string) => {
    setExpandedId(id === expandedId ? null : id);
  };

  return (
    <div className={styles.flexContainer}>
      {boxes.map((box) => (
        <div
          key={box.id}
          className={`${styles.flexItem} ${expandedId === box.id ? styles.expanded : ''}`}
        >
          <NumberBox
            {...box}
            isExpanded={expandedId === box.id}
            onToggle={() => handleExpand(box.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default NumberBoxGrid;