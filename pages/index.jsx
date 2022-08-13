// CSS:
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <h2>
          The Babylon Project was our last, best hope for peace. A
          self-contained world five miles long, located in neutral territory. A
          place of commerce and diplomacy for a quarter of a million humans and
          aliens. A shining beacon in space, all alone in the night. It was the
          dawn of the Third Age of Mankind... the year the Great War came upon
          us all. This is the story of the last of the Babylon stations. The
          year is 2259. The name of the place is Babylon 5.
        </h2>
        <div className={styles.decoLeft1}></div>
        <div className={styles.decoLeft2}></div>
        <div className={styles.decoRight1}></div>
        <div className={styles.decoRight2}></div>
      </section>
    </div>
  );
};

export default Home;
