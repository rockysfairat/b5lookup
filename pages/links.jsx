// B5 links data:
import { b5links } from "../data/data";
// Next components:
import Link from "next/link";
import Image from "next/image";

const Links = () => {
  return (
    <>
      <section>
        {b5links.map(({ id, title, url, img }) => (
          <Link href={url}>
            <div key={id} className="itemWrapper">
              <div className="imgWrapper">
                <Image
                  src={img}
                  alt={title}
                  width={200}
                  height={200}
                  objectFit="cover"
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div className="textWrapper">
                <h2>{title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </section>
      <style jsx>{`
        section {
          color: "white";
          margin-top: 90px;
          padding: 0px 10px 0px 10px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          column-gap: 20px;
          row-gap: 10px;
          heigt: 90%;
        }
        .itemWrapper {
          display: flex;
          padding: 10px 10px 5px 10px;
          background-color: #ffb703;
          box-shadow: #ffb703 1.95px 1.95px 2.6px;
          margin: 0px 0px 10px 0px;
          border-radius: 5px;
          cursor: pointer;
        }
        .imgWrapper {
          overflow: hidden;
          width: 20%;
          disp
        }
        .textWrapper {
          display: flex;
          align-items: center;
          padding-left: 15px;
          width: 80%;
        }
        @media screen and (max-width: 900px) {
          section {
            grid-template-columns: 1fr;
            grid-gap: 5px;
          }
          .itemWrapper {
            flex-direction: column;
            align-items: center;
          }
          .textWrapper {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

export default Links;
