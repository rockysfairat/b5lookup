// Characters data:
import { characters } from "../../data/data";
// Next components:
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
// React components:
import { useEffect, useState } from "react";

const Character = ({ data }) => {
  const router = useRouter();
  const { id } = router.query;

  const [char, setChar] = useState("");
  console.log(char);

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
              background-color: #ffb703;
              color: #023047;
              height: 90px;
              left: 20px;
              margin: 0;
              position: absolute;
              top: 110px;
              width: 90px;
              z-index: 3;
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
    setChar(character[0].searchQuery);
    console.log(data);
  }, []);

  return (
    <>
      <article>
        <div className="characterCard">
          {isTheCharacterMain()}
          <div className="imgWrapper">
            <Image
              src={character[0].photo}
              alt={character[0].name}
              width="300"
              height="370"
              objectFit="cover"
            />
          </div>

          <div className="characterSummary">
            <h2>{character[0].name}</h2>
            <p className="txtSummary">{character[0].summary}</p>
            <p>Race: {character[0].race}</p>
            <span>
              Played by{" "}
              <a href={character[0].playedByLink}>
                {character[0].playedByName}
              </a>
            </span>
          </div>
        </div>
        <div className="tweetsWrapper">
          {data.data.map(({ id, created_at, text }) => (
            <Link href={`https://twitter.com/i/web/status/${id}`}>
              <div className="tweet">
                <p className="tweetCreatedAt">
                  {created_at.replace("T", " - ").slice(-24, -5)}
                </p>{" "}
                <p>{text}</p>
              </div>
            </Link>
          ))}
        </div>
      </article>
      <style jsx>
        {`
          article {
            margin-top: 100px;
            display: grid;
            grid-template-columns: 1fr 2fr;
            width: 100%;
          }
          .characterCard {
            background: #219ebc;
            border-radius: 5px;
            box-shadow: rgba(18, 167, 247, 0.45) 1.95px 1.95px 2.6px;
            display: flex;
            height: fit-content;
            justify-content: space-evenly;
            margin-left: 10px;
            margin-top: 5px;
            padding: 10px;
            width: 700px;
          }
          .imgWrapper {
            align-items: center;
            border-radius: 50%;
            border: solid 5px #023047;
            display: flex;
            height: 300px;
            justify-content: center;
            overflow: hidden;
            position: relative;
            width: 300px;
          }
          .characterSummary {
            padding: 0px 10px 0px 10px;
            width: 50%;
          }
          .txtSummary {
            font-size: 1.2rem;
          }

          // TWEETS:
          .tweetsWrapper {
            cursor: pointer;
            display: flex;
            flex-direction: column;
            height: fit-content;
            margin: 0px 0px 50px 30px;
            width: 90%;
          }
          .tweet {
            background-color: #ffb703;
            border-radius: 5px;
            box-shadow: #ffb703 1.95px 1.95px 2.6px;
            font-size: 20px;
            margin: 5px;
            padding: 0px 10px 5px 10px;
          }
          .tweetCreatedAt {
            font-weight: 600;
            margin-bottom: 10px;
          }
          @media screen and (max-width: 1000px) {
            article {
              grid-template-columns: 1fr;
            }
            .tweetsWrapper {
              margin-left: 5px;
            }
            .characterCard {
              width: 90%;
            }
            .tweet {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

export async function getServerSideProps() {
  const token = process.env.BEARER_TOKEN;
  const res = await fetch(
    "https://api.twitter.com/2/tweets/search/recent?query=%22Babylon%205%22&tweet.fields=created_at,text&media.fields=preview_image_url&user.fields=location,username&place.fields=country",
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
