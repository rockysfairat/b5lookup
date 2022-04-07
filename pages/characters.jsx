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
              <img src={character.photo} alt={character.name} />
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
            justify-content: space-evenly;
            flex-wrap: wrap;
          }
          img {
            object-fit: cover;
            width: 120px;
            height: 150px;
          }
          article {
            outline: red solid 3px;
            width: 25%;
            margin: 1vw;
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
