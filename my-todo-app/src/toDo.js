import React from 'react';

const Todo = ({ todo, toggleTodo }) => {
  const handleCheckboxChange = () => {
    toggleTodo(todo.id);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleCheckboxChange}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
    </li>
  );
};

export default Todo;
