import { characters } from "../data/data";
import Image from "next/image";
import Link from "next/link";

const Characters = () => {
  return (
    <>
      <section>
        {characters.map((character) => (
          <Link href="/characters/[id]" as={`/characters/character`}>
            <article key={character.name}>
              <h2>{character.name}</h2>
              <Image
                src={character.photo}
                alt={character.name}
                width="100"
                height="120"
                objectFit="cover"
              />
              <p>{character.race}</p>
              <p>Played by:</p>{" "}
              <a href={character.playedByLink}>{character.playedByName}</a>
              {character.isMain ? <p>Main character</p> : null}
            </article>
          </Link>
        ))}
      </section>
      <style jsx>
        {`
          section {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            box-sizing: border-box;
            padding: 0 10px 0 10px;
          }
          // img {
          //   object-fit: cover;
          //   width: 120px;
          //   height: 150px;
          // }
          article {
            width: 25%;
            margin: 1vw 3vw 1.5vw 3vw;
            background: gold;
          }
          @media screen and (max-width: 800px) {
            article {
              width: 90%;
              margin: 1vw;
            }
            section {
              justify-content: space-around;
              padding: 0;
            }
          }
        `}
      </style>
      <style jsx global>
        {`
          body {
            box-sizing: border-box;
            margin: 0px;
            padding: 0px;
          }
        `}
      </style>
    </>
  );
};

export default Characters;
