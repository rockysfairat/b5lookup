// Next components:
import Image from "next/image";
import Link from "next/link";
// Data:
import { characters } from "../data/data";

const Characters = () => {
  return (
    <>
      <section>
        {characters.map(({ id, name, photo, race, playedByName, isMain }) => (
          <Link href={`/characters/${id}`}>
            <article key={id}>
              <div className="imgWrapper">
                {isMain ? <p className="mainCharacterSticker">★</p> : null}
                <Image
                  src={photo}
                  alt={name}
                  width="200"
                  height="250"
                  objectFit="cover"
                />
              </div>

              <div className="characterInfo">
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
      <style jsx>
        {`
          section {
            background: #353535;
            box-sizing: border-box;
            display: grid;
            grid-gap: 20px;
            grid-template-columns: repeat(3, 1fr);
            margin-top: 90px;
            padding: 0px 10px 0px 10px;
            width: 100%;
          }
          article {
            background: #219ebc;
            border-radius: 5px;
            box-shadow: rgba(18, 167, 247, 0.45) 1.95px 1.95px 2.6px;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            overflow: hidden;
            position: relative;
            width: 100%;
          }
          .characterInfo {
            display: flex;
            flex-direction: column;
            font-size: 1.2rem;
            padding: 0px 10px 10px 10px;
            position: relative;
            width: 50%;
          }
          .characterInfo h2 {
            font-size: 1.5rem;
          }
          .characterInfo p {
            margin: 8px;
          }

          .mainCharacterSticker {
            align-items: center;
            background: #ffb703;
            border-radius: 50%;
            border: solid 2px #023047;
            display: flex;
            font-size: 14px;
            font-size: 30px;
            height: 40px;
            justify-content: center;
            left: 15px;
            position: absolute;
            top: -10px;
            width: 40px;
            z-index: 1;
          }
          .imgWrapper {
            border-radius: 50%;
            border: 3px solid #023047;
            height: 200px;
            margin: 10px 0px 10px 10px;
            overflow: hidden;
            width: 200px;
          }
          @media screen and (max-width: 1450px) {
            section {
              grid-template-columns: repeat(2, 1fr);
          }
          @media screen and (max-width: 900px) {
            article {
              width: 100%;
            }
            section {
              justify-content: space-around;
              padding: 0;
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  );
};

export default Characters;
