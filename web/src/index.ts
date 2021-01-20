import { User } from "./models/User";

const user = new User({ name: "myname", age: 20 });

user.set({ name: "ali" });

user.on("change", () => {
  console.log("I am first change event");
});
user.on("change", () => {
  console.log("I am second change event");
});
user.on("click", () => {
  console.log("I am first click event");
});

user.trigger("change");
user.trigger("clic`k");
