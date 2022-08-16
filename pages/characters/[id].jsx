// Characters data:
import { characters } from "../../data/data";
// Next components:
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
// React components:
import { useEffect } from "react";
// CSS:
import styles from "../../styles/ID.module.css";

const Character = ({ data }) => {
  const router = useRouter();
  const { id } = router.query;

  // Extracting the local character data:
  const character = characters.filter((char) => {
    return char.id == id;
  });

  function isTheCharacterMain() {
    if (character[0].isMain) {
      return (
        <div className={styles.isMain}>
          <p>main character</p>
        </div>
      );
    } else {
      return null;
    }
  }

  function displayTweets() {
    if (data.data) {
      return data.data?.map(({ id, created_at, text }) => (
        <div key={id}>
          <Link href={`https://twitter.com/i/web/status/${id}`} passHref>
            <div className={styles.tweet}>
              <p className={styles.tweetCreatedAt}>
                {created_at.replace("T", " - ").slice(-24, -5)}
              </p>{" "}
              <p>{text}</p>
            </div>
          </Link>
        </div>
      ));
    } else {
      return (
        <div className={styles.noTweetsWrapper}>
          <h2 className={styles.noTweets}>
            No recent tweets about this character. Sorry
          </h2>
          <p className={styles.smiley}>:(</p>
        </div>
      );
    }
  }

  useEffect(() => {
    isTheCharacterMain();
  });

  return (
    <div key={character[0].id}>
      <Head>
        <title>B5: {character[0].name}</title>
      </Head>
      <article className={styles.article}>
        <div className={styles.characterCard}>
          {isTheCharacterMain()}
          <div className={styles.imgWrapper}>
            <Image
              src={character[0].photo}
              alt={character[0].name}
              width="300"
              height="370"
              objectFit="cover"
            />
          </div>

          <div className={styles.characterSummary}>
            <h2>{character[0].name}</h2>
            <p className={styles.txtSummary}>{character[0].summary}</p>
            <p>Race: {character[0].race}</p>
            <span>
              Played by{" "}
              <a href={character[0].playedByLink}>
                {character[0].playedByName}
              </a>
            </span>
          </div>
        </div>
        <div className={styles.tweetsWrapper}>
          {displayTweets()}
          <aside className={styles.aside}>
            Due to the Twitter API limitation only the most recent tweets could
            be displayed!
          </aside>
        </div>
      </article>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  const token = process.env.NEXT_PUBLIC_BEARER_TOKEN;

  // Extracting the search query from the character obj:
  const char = characters.filter((char) => {
    return char.id == id;
  });
  const query = char[0].searchQuery;

  const res = await fetch(
    `https://api.twitter.com/2/tweets/search/recent?query=${query}%20lang%3Aen%20%22Babylon%205%22&tweet.fields=author_id,created_at,id,lang,source,text`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      mode: "no-cors",
    }
  );

  const data = await res.json();

  return {
    props: { data },
  };
}

export default Character;
