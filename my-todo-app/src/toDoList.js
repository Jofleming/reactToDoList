import React from 'react';
import Todo from './toDo';

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
