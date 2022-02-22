import jss from "jss";
import preset from "jss-preset-default";
import { useEffect } from "react";

const Navbar = () => {
  jss.setup(preset());
  const styles = {
    nav: {
      width: "100%",
      outline: "red solid 2px",
      background: "#1E1E1E",
    },
    ul: {
      listStyle: "none",
      display: "flex",
    },
    li: {
      display: "block",
      outline: "3px green dotted",
      margin: 5,
      padding: 5,
      fontSize: "1.5rem",
      color: "#fff",
    },
  };
  const { classes } = jss.createStyleSheet(styles).attach();

  useEffect(() => {
    let test = document.getElementsByTagName("li");
    console.log(test[0]);
  }, []);

  return (
    <nav className={classes.nav}>
      <ul className={classes.ul}>
        <li className={classes.li}>Item 1</li>
        <li className={classes.li}>Item 2</li>
        <li className={classes.li}>Item 3</li>
      </ul>
    </nav>
  );
};

export default Navbar;
