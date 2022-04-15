import { useEffect } from "react";
import Image from "next/image";
import getAllCharactersData from "../utils/getAllCharactersData";

const Home = () => {
  useEffect(() => {
    getAllCharactersData();
  }, []);

  return (
    <div className="wrapper">
      <h1>Test</h1>
      <style jsx>
        {`
          .wrapper {
            box-sizing: border-box;
            outline: red solid 2px;
            height: 100vh;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
