import React from "react";
import { TodoListItemType } from "./App";
import TodoListItemBody from "./TodoListItemBody";
import TodoListItemDeleteButton from "./TodoListItemDeleteButton";

type Props = {
    todoListItem: TodoListItemType;
    deleteTodo: (id: number) => void;
};

const TodoListItem = (props: Props) => {
    console.log("## TodoListItem");
    return (
        <li>
            <TodoListItemBody todoListItem={props.todoListItem} />&nbsp;&nbsp;&nbsp;
            <TodoListItemDeleteButton deleteJob={props.deleteTodo} id={props.todoListItem.id} />
        </li>
    );
};

export default React.memo(TodoListItem, (prevProps, nextProps) => {
    return prevProps.todoListItem === nextProps.todoListItem;
});