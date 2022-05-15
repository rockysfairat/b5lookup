// Next components:
import Image from "next/image";
import Link from "next/link";
// Data:
import { characters } from "../data/data";

const Characters = () => {
  return (
    <>
      <section>
        {characters.map(
          ({ id, name, photo, race, playedByLink, playedByName, isMain }) => (
            <Link href={`/characters/${id}`}>
              <article key={id}>
                <h2>{name}</h2>
                <Image
                  src={photo}
                  alt={name}
                  width="100"
                  height="120"
                  objectFit="cover"
                />
                <p>{race}</p>
                <p>Played by:</p> <a href={playedByLink}>{playedByName}</a>
                {isMain ? <p>Main character</p> : null}
              </article>
            </Link>
          )
        )}
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
          article {
            width: 25%;
            margin: 1vw 3vw 1.5vw 3vw;
            background: #12a7f7;
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
    </>
  );
};

export default Characters;
