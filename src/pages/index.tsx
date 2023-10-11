import { useState } from "react";
const IndexPage = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, content: "Todot#1" },
    { id: 2, content: "Todot#2" },
    { id: 3, content: "Todot#3" },
  ]);

  return (
    <>
      <input
        type="text"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />
      <button
        onClick={() => {
          setTodos([...todos, { id: todos.length + 1, content: todo }]);

          setTodo("");
        }}
      >
        add Todo
      </button>
      <br />
      <br />

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
    </>
  );
};
export default IndexPage;
