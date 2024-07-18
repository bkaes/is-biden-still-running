"use client"
import React from 'react';
import NumberBox from '../NumberBox/NumberBox';
import styles from './NumberBoxContainer.module.css';
import NumberBoxGrid from '../NumberBoxGrid/NumberBoxGrid';

interface ExpandoData {
  public: string[];
  private: string[];
  halfhearted: string[];
  silent: string[];
}

interface BoxData {
  id: string;
  number: number;
  outOf: number;
  comment: string;
  image: string;
  expandoData: ExpandoData;
}

const NumberBoxContainer: React.FC = () => {
  const boxesData = [
    {
      id: '1',
      number: 21,
      outOf: 213,
      comment: "House Democrats",
      image: "/nancy.png",
      expandoData: {
        people: {
          public: ["Senator A", "Senator B"],
          private: ["Minority Leader Hakeem Jeffries (NY)", "Nancy Pelosi (CA)"],
          halfhearted: ["Jim Clyburn (SC)"],
          support: ["AOC (NYC)"],
        }
      }
    },
    {
      id: '2',
      number: 2,
      outOf: 47,
      comment: "Senate Democrats",
      image: "/peter.png",
      expandoData: {
        people: {

          public: ["Peter Welch"],
          private: ["Majority Leader Chuck Shumer "],
          support: ["Bernie Sanders (VT)"],
        }
      }
    }, {
      id: '3',
      number: 1,
      outOf: 23,
      comment: "Democratic Governors",
      image: "/maura.png",
      expandoData: {
        people: {

          public: ["Maura Healey"],
        }
      }
    }, {
      id: '4',

      number: 1,
      outOf: 1,
      comment: "George Clooney",
      image: "/george.png",
      expandoData:
      {
        people: {

          public: ["George Clooney"],
        }
      }
    }, {
      id: '5',

      number: 1,
      outOf: 1,
      comment: "Covid Test",
      image: "/covid.png",
      expandoData:
      {
        people: undefined
      }
    }
  ];

  return <NumberBoxGrid boxes={boxesData} />;
};
export default NumberBoxContainer;
