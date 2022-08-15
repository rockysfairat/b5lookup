// Next components:
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
// Data:
import { characters } from "../data/data";
// CSS:
import styles from "../styles/Characters.module.css";

const Characters = () => {
  return (
    <>
      <section className={styles.section}>
        <Head>
          <title>B5: Characters</title>
        </Head>
        {characters.map(({ id, name, photo, race, playedByName, isMain }) => (
          <Link href={`/characters/${id}`} key={id} passHref>
            <article className={styles.article} key={id}>
              <div className={styles.imgWrapper}>
                {isMain ? (
                  <p className={styles.mainCharacterSticker}>★</p>
                ) : null}
                <Image
                  src={photo}
                  alt={name}
                  width="200"
                  height="250"
                  objectFit="cover"
                />
              </div>

              <div className={styles.characterInfo}>
                <h2>{name}</h2>
                <span>
                  <p>Race: {race}</p>
                  <p>Played by: {playedByName}</p>
                </span>
              </div>
            </article>
          </Link>
        ))}
      </section>
    </>
  );
};

export default Characters;
