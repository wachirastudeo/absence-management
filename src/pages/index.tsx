import { useState } from "react";

interface Todo {
  id: number;
  content: string;
}
const IndexPage = () => {
  const [todo, setTodo] = useState<string>("");

  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, content: "Todto#1" },
    { id: 2, content: "Todto#2" },
    { id: 3, content: "Todto#3" },
  ]);

  const handleClick = () => {
    setTodos([...todos, { id: todos.length + 1, content: todo }]);
    setTodo("");
  };

  return (
    <>
      <input
        type="text"
        value={todo}
        onChange={(event) => setTodo(event.currentTarget.value)}
      ></input>
      <button onClick={handleClick}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
    </>
  );
};

export default IndexPage;
