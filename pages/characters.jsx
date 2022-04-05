import { characters } from "../data/data";
import Image from "next/image";

const Characters = () => {
  return (
    <>
      <section>
        {characters.map((character) => (
          <article key={character.name}>
            <p>{character.name}</p>
            <p>{character.race}</p>
            <p>Played by:</p>{" "}
            <a href={character.playedByLink}>{character.playedByName}</a>
            {character.isMain ? <p>Main character</p> : null}
          </article>
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
          article {
            outline: red solid 3px;
            width: 25%;
            margin: 10px;
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
