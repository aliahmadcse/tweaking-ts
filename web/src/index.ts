import { User } from "./models/User";

const user = new User({ id: 1, name: "Ali Ahmad", age: 22 });


user.on('save', () => {
  console.log(user);
});

user.save();
