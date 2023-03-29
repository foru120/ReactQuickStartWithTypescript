import React, { useCallback, useState } from "react";
import TodoList from './TodoList';
import produce from 'immer';

export type TodoListItemType = {
  id: number;
  todo: string;
};

const App = () => {
  const [todoList, setTodoList] = useState<Array<TodoListItemType>>([]);
  const [todo, setTodo] = useState<string>("");

  const addTodo = useCallback((todo: string) => {    
    const newTodoList = produce(todoList, (draft) => {
      const item = { id: new Date().getTime(), todo };
      draft.push(item);
    });
    setTodoList(newTodoList);
    setTodo("");
  }, [todoList]);

  const deleteTodo = useCallback((id: number) => {
    const newTodoList = produce(todoList, (draft) => {
      const index = draft.findIndex((item) => item.id === id);
      draft.splice(index, 1);
    });
    setTodoList(newTodoList);
  }, [todoList]);

  return (
    <div className="boxStyle">
      <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={() => addTodo(todo)}>Add Todo</button>
      <br />
      <TodoList todoList={todoList} deleteTodo={deleteTodo} />
      <div>todo 개수 : {todoList.length}</div>
    </div>
   );
};

export default App;