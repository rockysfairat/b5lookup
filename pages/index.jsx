import { useEffect } from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="wrapper">
      <section>
        <h2>
          The Babylon Project was our last, best hope for peace. A
          self-contained world five miles long, located in neutral territory. A
          place of commerce and diplomacy for a quarter of a million humans and
          aliens. A shining beacon in space, all alone in the night. It was the
          dawn of the Third Age of Mankind... the year the Great War came upon
          us all. This is the story of the last of the Babylon stations. The
          year is 2259. The name of the place is Babylon 5.
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
            align-items: center;
            backdrop-filter: blur(10px);
            color: #fff;
            display: flex;
            height: fit-content;
            left: 20px;
            padding: 10px;
            position: absolute;
            top: 150px;
            width: 40%;
          }
          section h2 {
            margin: 0px;
          }
          .decoLeft1 {
            width: 100px;
            height: 3px;
            background: #12a7f7;
            position: absolute;
            bottom: -5px;
            left: -2px;
          }
          .decoLeft2 {
            width: 3px;
            height: 100px;
            background: #12a7f7;
            position: absolute;
            left: -5px;
            bottom: -5px;
          }
          .decoRight1 {
            width: 100px;
            height: 3px;
            background: #12a7f7;
            position: absolute;
            top: -5px;
            right: -2px;
          }
          .decoRight2 {
            width: 3px;
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
