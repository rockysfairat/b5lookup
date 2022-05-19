const Footer = () => {
  return (
    <footer>
      <p>
        Created by{" "}
        <a href="http://github.com/rockysfairat">Ålexander Yurchenko</a>
      </p>
      <style jsx>
        {`
          footer {
            background: #219ebc;
            bottom: 0;
            height: 20px;
            position: fixed;
            width: 100%;
          }

          p {
            font-size: 1rem;
            margin: 0px;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
