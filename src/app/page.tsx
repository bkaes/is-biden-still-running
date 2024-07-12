import Image from "next/image";
import styles from "./page.module.css";
import NumberBox from "./NumberBox";
import CenteredText from "./CenteredText";
export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{ height: "20px" }}></div>
      <h1 style={{ fontSize: "min(max(48px, 5vw), 80px)", fontWeight: "100", textAlign: "center" }}> Is Biden still running?</h1>

        <CenteredText />


      <div className={styles.card} style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        alignItems: 'center', padding: '10px'
      }}>
        <h3 style={{ fontWeight: "200" }}>Calls for Biden to Step down</h3>
        <div style={{ height: "20px" }}></div>
        <div style={{ display: 'flex', flexDirection: 'row', }}>
          <NumberBox number={21} outOf={213} comment="House Democrats" />
          <div style={{ width: "40px" }}></div>
          <NumberBox number={1} outOf={47} comment="Senate Democrats" />
          <div style={{ width: "40px" }}></div>
          <NumberBox number={1} outOf={1} comment="George Clooney" />
        </div>
      </div>
      <div >
        <div className={styles.card}>
          <a href="https://votesaveamerica.com/">
            Sign up for Vote Save America
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://www.washingtonpost.com/politics/2024/07/12/election-2024-biden-press-conference-reaction/#author-box">
            WaPo 2024 Election Live Feed
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://www.cnn.com/politics/live-news/election-2024-campaign-news-07-12-24/index.html">
            CNN 2024 Election Live Feed
          </a>
        </div>
      </div>
      <a> Fuck Donald Trump </a>
    </main>
  );
}
