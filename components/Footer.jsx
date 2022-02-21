import jss from "jss";
import preset from "jss-preset-default";

const Footer = () => {
  jss.setup(preset());
  const styles = {
    footer: {
      background: "#0a7",
    },
  };

  const { classes } = jss.createStyleSheet(styles).attach();

  return (
    <footer className={classes.footer}>
      <p>
        Created by{" "}
        <a href="http://github.com/rockysfairat">Ålexander Yurchenko</a>
      </p>
    </footer>
  );
};

export default Footer;
