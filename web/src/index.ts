import { User } from "./models/User";

const user = User.buildUser({ id: 1, name: "Ali Ahmad", age: 22 });


user.set({ name: "Hello" });

console.log(user.get("name"));



user.on('save', () => {
  console.log(user);
});

user.save();

