import { User } from "./models/User";

const user = new User({ name: "new record", age: 0 });


user.on('click', () => {
  console.log("hello world");
});

user.on('click', () => {
  console.log("123");
});

user.trigger('click');

// console.log(user.get("name"));
