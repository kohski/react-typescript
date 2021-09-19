import axios from "axios";
import "./styles.css";
import { useState } from "react";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./types/user";

const user: User = {
  name: "kohski",
  hobbies: ["映画", "ゲーム"]
};

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = async () => {
    const response = await axios.get<Array<TodoType>>(
      "https://jsonplaceholder.typicode.com/todos"
    );
    setTodos(response.data);
  };
  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color="red" fontSize="18px"></Text>
      <button onClick={onClickFetchData}>データの取得</button>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            title={todo.title}
            userId={todo.userId}
            completed={todo.completed}
          />
        );
      })}
    </div>
  );
}
