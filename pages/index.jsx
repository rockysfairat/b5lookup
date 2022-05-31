import { useEffect } from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="wrapper">
      <section>
        <h2>
          The collection of last tweets about characters of the tv-series
          Babylon 5.
        </h2>
        <div className="decoLeft1"></div>
        <div className="decoLeft2"></div>
        <div className="decoRight1"></div>
        <div className="decoRight2"></div>
      </section>
      <style jsx>
        {`
          .wrapper {
            box-sizing: border-box;
            height: 100%;
            background: url(../images/B5background.gif);
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            background-size: 2000px auto;
          }
          section {
            position: absolute;
            left: 20px;
            top: 150px;
            width: 40%;
            height: 30%;
            display: flex;
            align-items: center;
            backdrop-filter: blur(10px);
            color: #fff;
          }
          .decoLeft1 {
            width: 100px;
            height: 5px;
            background: #12a7f7;
            position: absolute;
            bottom: -5px;
          }
          .decoLeft2 {
            width: 5px;
            height: 100px;
            background: #12a7f7;
            position: absolute;
            left: -5px;
            bottom: -5px;
          }
          .decoRight1 {
            width: 100px;
            height: 5px;
            background: #12a7f7;
            position: absolute;
            top: -5px;
            right: 0;
          }
          .decoRight2 {
            width: 5px;
            height: 100px;
            background: #1796e7;
            position: absolute;
            right: -5px;
            top: -5px;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
