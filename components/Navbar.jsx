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
          position: relative;
        }
        li::before,
        li::after {
          content: "";
          width: 15px;
          height: 10px;
          background: #000;
          position: absolute;
          transform: rotateZ(45deg);
        }
        li::before {
          top: -4px;
          right: -7px;
          background: #000;
          // display: none;
        }
        li::after {
          bottom: -4px;
          left: -6px;
        }
        a {
          text-decoration: none;
          color: #000;
          padding: 5px 10px 5px 10px;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
