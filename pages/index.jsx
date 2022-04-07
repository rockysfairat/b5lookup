const Home = () => {
  return (
    <div className="wrapper">
      <h1>Test</h1>
      <style jsx>
        {`
          .wrapper {
            box-sizing: border-box;
            outline: red solid 2px;
            height: 100vh;
          }
        `}
      </style>
      <style jsx global>{`
        body {
          box-sizing: border-box;
          margin: 0px;
          padding: 0px;
        }
      `}</style>
    </div>
  );
};

export default Home;
