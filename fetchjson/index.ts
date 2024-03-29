import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

axios
  .get(url)
  .then((res) => {
    const todo = res.data as Todo;

    const userId = todo.userId;
    const id = todo.id;
    const title = todo.title;
    const finished = todo.completed;

    logTodo(userId, id, title, finished);
  })
  .catch((err) => {
    console.log(err);
  });

const logTodo = (
  userId: number,
  id: number,
  title: string,
  finished: boolean
) => {
  console.log(`
    user id: ${userId}
    Todo Id: ${id},
    Title: ${title}
    and finished: ${finished}`);
};
