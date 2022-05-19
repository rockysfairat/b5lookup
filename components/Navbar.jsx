// React hooks:
import { useId } from "react";
// Next components:
import Link from "next/link";
import Image from "next/image";
// Data:
import { menu } from "../data/data";
import b5logo from "../public/images/b5logo.jpg";

const Navbar = () => {
  const id = useId();
  return (
    <nav>
      <Image
        src={b5logo}
        alt="Babylon 5 logo"
        width="120"
        height="20"
        objectFit="cover"
      />
      <ul>
        {menu.map((menuItem) => (
          <li key={id + menuItem.text}>
            <div className="deco1"></div>
            <div className="deco2"></div>
            <div className="deco3"></div>
            <div className="deco4"></div>
            <Link href={menuItem.link}>
              <a>{menuItem.text}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        nav {
          background: #000;
          height: 80px;
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 10;
          display: flex;
          -webkit-box-shadow: 1px 6px 12px -1px ##219ebc;
          box-shadow: 1px 6px 12px -1px ##219ebc;
        }
        ul {
          display: flex;
          list-style: none;
        }
        li {
          background: #219ebc;
          display: flex;
          font-size: 1.5rem;
          margin: 5px;
          padding: 5px;
          position: relative;
          overflow: hidden;
        }
        a {
          text-decoration: none;
          color: #000;
          z-index: 2;
        }
        .deco1,
        .deco2,
        .deco3,
        .deco4 {
          width: 50%;
          height: 50%;
          position: absolute;
        }
        .deco1 {
          background: red;
          top: 0;
          left: 0;
        }
        .deco2 {
          background: green;
          top: 0;
          right: 0;
        }
        .deco3 {
          background: blue;
          bottom: 0;
          left: 0;
        }
        .deco4 {
          background: gold;
          bottom: 0;
          right: 0;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
