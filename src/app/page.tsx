import Image from "next/image";
import styles from "./page.module.css";
import NumberBox from "./components/NumberBoxContainer/NumberBoxContainer";
import CenteredText from "./components/CenteredText/CenteredText";
import NumberBoxContainer from "./components/NumberBoxContainer/NumberBoxContainer";
export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{ height: "20px" }}></div>
      <h1 style={{ fontSize: "min(max(48px, 5vw), 80px)", fontWeight: "100", textAlign: "center" }}> Is Biden still running?</h1>

        <CenteredText />


      <div  style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        alignItems: 'center', padding: '10px'
      }}>
        <h2>Calls to Step Down</h2>
        <NumberBoxContainer />
      </div>
      <div >
        <div className={styles.card}>
          <a href="https://votesaveamerica.com/">
            Sign up for Vote Save America
          </a>
        </div>
      </div>
      <a> Fuck Donald Trump </a>
    </main>
  );
}
