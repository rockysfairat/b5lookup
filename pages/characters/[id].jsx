import { characters } from "../../data/data";
// Next components:
import { useRouter } from "next/router";
import Image from "next/image";
// React components:
import { useEffect } from "react";

const Character = () => {
  const router = useRouter();
  const { id } = router.query;

  // Extracting the local character data:
  const character = characters.filter((char) => {
    return char.id == id;
  });

  function isTheCharacterMain() {
    if (character[0].isMain) {
      return (
        <div className="isMain">
          <p>main character</p>
          <style jsx>{`
            .isMain {
              background-color: green;
              color: white;
              height: 90px;
              left: -5px;
              margin: 0;
              position: absolute;
              top: -15px;
              width: 90px;
              z-index: 2;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
            }
            .isMain p {
              margin: 0;
              word-wrap: break-word;
              text-align: center;
            }
          `}</style>
        </div>
      );
    } else {
      return null;
    }
  }

  useEffect(() => {
    isTheCharacterMain();
  }, []);

  return (
    <>
      <article>
        <div className="characterCard">
          <div className="imgWrapper">
            {isTheCharacterMain()}

            <Image
              src={character[0].photo}
              alt={character[0].name}
              width="250"
              height="420"
              objectFit="cover"
            />
          </div>

          <div className="characterSummary">
            <h2>{character[0].name}</h2>
            <p>{character[0].summary}</p>
            <p>Race: {character[0].race}</p>
            <span>
              Played by{" "}
              <a href={character[0].playedByLink}>
                {character[0].playedByName}
              </a>
            </span>
          </div>
        </div>
      </article>
      <style jsx>
        {`
          article {
            height: 100hv;
          }
          .characterCard {
            outline: red dotted 3px;
            background: #12a7f7;
            width: 50%;
            display: flex;
            justify-content: space-evenly;
            margin-top: 50px;
          }
          .imgWrapper {
            position: relative;
          }
          .characterSummary {
            width: 50%;
            padding: 0px 10px 0px 10px;
          }
        `}
      </style>
    </>
  );
};

export default Character;
