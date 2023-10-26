import React, { type ChangeEventHandler, useState } from 'react';

interface Todo {
  id: number;
  content: string;
}
interface TodoListProps {
  todos: Todo[];
}

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
interface FormTodoProps {
  addtodo: (todo: string) => void;
}
const FormTodo = ({ addtodo }: FormTodoProps) => {
  const [todo, setTodo] = useState('');
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTodo(event.target.value);
  };
  const handleClick = () => {
    addtodo(todo);
    setTodo('');
  };
  return (
    <>
      <input type="text" value={todo} onChange={handleChange}></input>
      <button onClick={handleClick}> Add todo</button>
    </>
  );
};

const Index2 = () => {
  const [todos, setTodos] = useState([
    { id: 1, content: '#1 todo' },
    { id: 2, content: '#2 todo' },
    { id: 3, content: '#3 todo' },
    { id: 4, content: '#4 todo' },
  ]);

  const addtodo = (todo: string) => {
    setTodos([...todos, { id: todos.length + 1, content: todo }]);
  };
  return (
    <>
      <FormTodo addtodo={addtodo} />
      <TodoList todos={todos} />
    </>
  );
};

export default Index2;
