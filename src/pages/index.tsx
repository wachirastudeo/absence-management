import { type ChangeEventHandler, useState } from "react";

interface Todo {
  id: number;
  content: string;
}

interface TodoFormProps {
  addTodo: (todo: string) => void;
}

const TodoFrom = ({ addTodo }: TodoFormProps) => {
  const [todo, setTodo] = useState<string>("");
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTodo(event.currentTarget.value);
  };
  const handleAddTodo = () => {
    addTodo(todo);
    setTodo("");
  };
  return (
    <>
      <input type="text" value={todo} onChange={handleChange}></input>
      <button onClick={handleAddTodo}>Add Todo</button>
    </>
  );
};

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
    </>
  );
};

interface TodoListProps {
  todos: Todo[];
}

const IndexPage = () => {
  const [todos, setTodos] = useState([
    { id: 1, content: "Todto#1" },
    { id: 2, content: "Todto#2" },
    { id: 3, content: "Todto#3" },
  ]);

  const addTodo = (todo: string) => {
    setTodos([...todos, { id: todos.length + 1, content: todo }]);
  };

  return (
    <>
      <TodoFrom addTodo={addTodo}></TodoFrom>
      <TodoList todos={todos}></TodoList>
    </>
  );
};

export default IndexPage;
