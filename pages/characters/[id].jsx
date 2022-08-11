// Characters data:
import { characters } from "../../data/data";
// Next components:
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
// React components:
import { useEffect } from "react";

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

  function displayTweets() {
    if (data.data) {
      return data.data?.map(({ id, created_at, text }) => (
        <>
          <Link href={`https://twitter.com/i/web/status/${id}`}>
            <div className="tweet">
              <p className="tweetCreatedAt">
                {created_at.replace("T", " - ").slice(-24, -5)}
              </p>{" "}
              <p>{text}</p>
            </div>
          </Link>
          <style jsx>{`
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
          `}</style>
        </>
      ));
    } else {
      return (
        <div className="noTweetsWrapper">
          <h2 className="noTweets">
            No recent tweets about this character. Sorry
          </h2>
          <p>:(</p>
          <style jsx>{`
            .noTweetsWrapper {
              display: grid;
              grid-template-columns: 490px 100px;
              margin: 0px;
            }
            .noTweets {
              color: #fff;
              outline: #fff solid 3px;
              padding: 10px 20px 10px 10px;
              border-radius: 10px;
              width: fit-content;
              margin: 15px 0px 15px 5px;
            }
            p {
              width: 35px;
              height: 35px;
              background-color: #353535;
              border: #fff dashed 2px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0px;
              color: #fff;
              position: relative;
              z-index: 2;
              top: 40px;
              right: 20px;
              font-weight: 600;
              font-size: 18px;
            }
            @media screen and (max-width: 1000px) {
              .noTweets {
                margin: 30px 0px 15px 10px;
              }
              p {
                top: 50px;
                right: 15px;
              }
            }
          `}</style>
        </div>
      );
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
          {displayTweets()}
          <aside>
            Due to the Twitter API limitation only the most recent tweets could
            be displayed!
          </aside>
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
          // TWEETS AREA:
          .tweetsWrapper {
            cursor: pointer;
            display: flex;
            flex-direction: column;
            height: fit-content;
            margin: 0px 0px 50px 30px;
            width: 90%;
          }
          aside {
            color: #fff;
            outline: #fff solid 2px;
            padding: 10px;
            border-radius: 10px;
            width: fit-content;
            margin: 15px 0px 25px 5px;
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
            aside {
              margin-left: 10px;
              font-size: 18px;
            }
          }
        `}
      </style>
    </>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  const token = process.env.BEARER_TOKEN;

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
