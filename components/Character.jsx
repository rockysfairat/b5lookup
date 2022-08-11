const Character = (id, name, race, playedByLink, playedByName, isMain) => {
  return (
    <section key={id}>
      <article>
        <h2>{name}</h2>
        <p>{race}</p>
        <p>Played by:</p> <a href={playedByLink}>{playedByName}</a>
        {isMain ? <p>Main character</p> : null}
      </article>
    </section>
  );
};

export default Character;
