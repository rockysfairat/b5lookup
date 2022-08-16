// Next components:
import Link from "next/link";
import Head from "next/head";

const Links = ({ tweets }) => {
  console.log(tweets);
  return (
    <>
      <Head>
        <title>B5: Recent tweets</title>
      </Head>
      <article>
        <div className="tweetsWrapper">
          {tweets.data.map((tweet) => (
            <Link
              href={`https://twitter.com/i/web/status/${tweet.id}`}
              passHref
              key={tweet.id}
            >
              <div className="tweet">
                <p className="tweetCreatedAt">
                  {tweet.created_at.replace("T", " - ").slice(-24, -5)}
                </p>{" "}
                <p>{tweet.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </article>
      <style jxs>
        {`
        article {
            display: flex;
            justify-content: center;
            margin-top: 100px;
            width: 100%;
        }
        .tweetsWrapper {
            cursor: pointer;
            display: flex;
            flex-direction: column;
            height: fit-content;
            margin: 0px 0px 50px 0px;
            width: 50%;
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
            .tweetsWrapper {
                width: 90%;
          }
    `}
      </style>
    </>
  );
};

export async function getServerSideProps() {
  const token = process.env.NEXT_PUBLIC_BEARER_TOKEN;
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

  const tweets = await res.json();

  if (!tweets) {
    return {
      notFound: true,
    };
  }

  return {
    props: { tweets },
  };
}

export default Links;
