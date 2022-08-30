import Layout from "../components/Layout";
import Head from "next/head";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Head>
        <title>Babylon 5 tweets lookup</title>
        <meta name="twitter:card" content="summary" />
        <meta property="og:url" content="bylon5lookup.vercel.app/" />
        <meta property="og:title" content="Babylon 5 tweets lookup" />
        <meta
          property="og:description"
          content="Check up the latest tweets about the characters of Babylon 5 TV series!"
        />
        <meta
          property="og:image"
          content="http://github.com/rockysfairat/b5lookup/blob/main/public/B5screenshot.jpg"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
