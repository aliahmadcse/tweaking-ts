import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

// const numbersCollection = new NumbersCollection([-3, 2, 14, 1]);

const charactersCollection = new CharactersCollection("saX");
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
