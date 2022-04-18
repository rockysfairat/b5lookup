import { characters } from "../data/data";

const getAllCharactersData = () => {
  const charNames = [];
  Object.values(characters).forEach((character) =>
    charNames.push({
      name: character.name,
      race: character.race,
      photo: character.photo,
      playedByName: character.playedByName,
      playedByLink: character.playedByLink,
      isMain: character.isMain,
    })
  );
  return charNames;
};

export default getAllCharactersData;
