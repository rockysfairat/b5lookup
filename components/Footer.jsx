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
            background: #43b116;
            position: absolute;
            bottom: 0px;
            width: 100%;
          }
          p {
            font-size: 1rem;
          }
          a {
            text-decoration: none;
            color: #000;
          }
          a:hover {
            text-decoration: underline;
          }
          a:visited {
            color: #000;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
