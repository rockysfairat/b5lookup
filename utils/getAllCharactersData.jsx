import { characters } from "../data/data";

const getAllCharactersData = () => {
  let charNames = [];
  Object.values(characters).forEach((character) =>
    charNames.push(character.name)
  );
  return charNames;
};

export default getAllCharactersData;
