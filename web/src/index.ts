import { Collection } from './models/Collection';
import { User, UserProps } from "./models/User";

const user = User.buildUser({ id: 1, name: "Ali Ahmad", age: 22 });


const collection = User.buildUserCollection();

collection.on('change', () => {
  console.log("change");
});


collection.fetch();
console.log(collection.model);



