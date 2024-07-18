import React from 'react';
import styles from "./ExpandoBox.module.css";
import CloseButton from '../CloseButton/CloseButton';

interface ExpandoBoxProps {
  data: {
    number: number;
    outOf: number;
    comment: string;
    image: string;
    expandoData: {
      people?: {
        public?: string[];
        private?: string[];
        halfhearted?: string[];
        support?: string[];
        silent?: string[];
      };
    };
  };
  onClose: () => void;
}

const ExpandoBox: React.FC<ExpandoBoxProps> = ({ data, onClose }) => {
  const people = data.expandoData.people;
  return (
    <div className={styles.expandoBox}>
      <div className={styles.expandoHeader}> {data.number} out of {data.outOf} {data.comment}</div>
      <CloseButton onClick={onClose} />
      <div className={styles.expandoBody}>
        {people ? (
          <div className={styles.expandoBox}>
            {people.public ? (
              <div className={styles.expandoSection}>
                <h4>Public calls to step down</h4>
                <ul>
                  {people.public.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ) :
              (<div></div>)
            }
            {people.private ? (
              <div className={styles.expandoSection}>
                <h4>Private calls to step down</h4>
                <ul>
                  {people.private.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ) :
              (<div></div>)
            }
            {people.halfhearted ? (
              <div className={styles.expandoSection}>
                <h4>Half-Hearted Public Support</h4>
                <ul>
                  {people.halfhearted.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ) :
              (<div></div>)
            }
            {people.support ? (
              <div className={styles.expandoSection}>
                <h4>Full Support</h4>
                <ul>
                  {people.support.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ) :
              (<div></div>)
            }
            {people.silent ? (
              <div className={styles.expandoSection}>
                <h4>Silence</h4>
                <ul>
                  {people.silent.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ) :
              (<div></div>)
            }
          </div>
        ) : (<div className={styles.expandoSection}>
          <h4>😬</h4>

        </div>)
        }
      </div>
    </div>
  );
};

export default ExpandoBox;