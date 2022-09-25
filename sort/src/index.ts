import {Sorter} from "./Sorter";
import {NumbersCollection} from "./NumbersCollection";
import {CharactersCollection} from "./CharactersCollection";
import {LinkedList} from "./LinkedList";

// const numbersCollection = new NumbersCollection([-3, 2, 14, 1]);

// const charactersCollection = new CharactersCollection("saX");
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(3);
linkedList.add(-12);
linkedList.add(11);
linkedList.add(19);

linkedList.sort();

linkedList.print();
