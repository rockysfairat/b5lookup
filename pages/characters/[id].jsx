import { characters } from "../../data/data";
// Next components:
import { useRouter } from "next/router";
import Image from "next/image";
// React components:
import { useEffect, useState } from "react";

const Character = () => {
  const router = useRouter();
  const { id } = router.query;

  // Extracting the local character data:
  const character = characters.filter((char) => {
    return char.id == id;
  });

  // Fetching Tweets:

  // const [fetchedTweets, setFetchedTweets] = [];

  // const token = process.env.BEARER_TOKEN;
  // const url = "https://api.twitter.com/2/tweets/search/recent?query=";

  // async function getTweets() {
  //   const params = {
  //     query: "%22Babylon%205%22",
  //     "tweet.fields": "text",
  //   };
  //   const res = await fetch(url + params.query, {
  //     method: "GET",
  //     mode: "no-cors",
  //     headers: {
  //       Autorization: `Bearer ${token}`,
  //     },
  //   });
  //   if (res.ok) {
  //     let json = await res.json();
  //   } else {
  //     alert("HTTP-err: " + res.status);
  //   }
  // }

  // useEffect(() => {
  //   setFetchedTweets = getTweets();
  //   console.log(fetchedTweets);
  // }, []);

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
          <p>Test</p>
        </div>
      </article>
      <style jsx>
        {`
          article {
            margin-top: 100px;
            display: grid;
            grid-template-columns: repeat(2, auto);
            width: 100%;
          }
          .characterCard {
            background: #219ebc;
            display: flex;
            justify-content: space-evenly;
            width: 700px;
            margin-left: 10px;
            padding: 10px;
            border-radius: 5px;
            box-shadow: rgba(18, 167, 247, 0.45) 1.95px 1.95px 2.6px;
          }
          .imgWrapper {
            width: 300px;
            height: 300px;
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            border: solid 5px #023047;
          }
          .characterSummary {
            width: 50%;
            padding: 0px 10px 0px 10px;
          }
          .txtSummary {
            font-size: 1.2rem;
          }
          .tweetsWrapper {
            outline: green solid 2px;
            width: 50px;
          }
          @media screen and (max-width: 900px) {
            article {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  );
};

export default Character;
