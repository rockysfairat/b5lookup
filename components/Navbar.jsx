// React hooks:
import { useId } from "react";
// Next components:
import Link from "next/link";
// Data:
import { menu } from "../data/data";

const Navbar = () => {
  const id = useId();
  return (
    <nav>
      <ul>
        {menu.map((menuItem) => (
          <li key={id + menuItem.text}>
            <Link href={menuItem.link}>
              <a>{menuItem.text}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        nav {
          background: #1e1e1e;
          position: relative;
          z-index: 1;
        }
        ul {
          list-style: none;
          display: flex;
          z-index: 2;
        }
        li {
          margin: 5px;
          padding: 5px;
          font-size: 1.5rem;
          position: relative;
          background: red;
          z-index: 3;
          display: flex;
        }
        li:before {
          content: "";
          position: absolute;
          width: 20px;
          height: 20px;
          background: green;
          z-index: 1;
          top: -10px;
          left: -10px;
        }
        a {
          text-decoration: none;
          color: #fff;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
