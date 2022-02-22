// Import:
import jss from "jss";
import preset from "jss-preset-default";
import dynamic from "next/dynamic";

// Components:
const Navbar = dynamic(() => import("./Navbar"));
import Footer from "./Footer";

const Layout = ({ children }) => {
  jss.setup(preset());
  const styles = {
    "@global": {
      body: {
        margin: 0,
        position: "relative",
      },
    },
  };

  const { classes } = jss.createStyleSheet(styles).attach();

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
