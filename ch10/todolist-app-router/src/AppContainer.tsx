import { useEffect, useState } from 'react';
import App from './App';
import produce from 'immer';
import axios from 'axios';

export type TodoItemType = {
    id: number;
    todo: string;
    desc: string;
    done: boolean;
};
export type StatesType = {
    todoList: Array<TodoItemType>
};
export type CallbacksType = {
    addTodo: (todo: string, desc: string, callback: () => void) => void;
    deleteTodo: (id: number) => void;
    toggleDone: (id: number) => void;
    updateTodo: (id: number, todo: string, desc: string, done: boolean, callback: () => void) => void;
};

// 다른 사용자를 사용하려면 다음 경로로 요청하여 사용자 데이터를 생성
// --> http://localhost:8000/todolist/[user명]/create
const USER = "gdhong";
const BASEURI = "/api/todolist/" + USER;

const AppContainer = () => {
    let [todoList, setTodoList] = useState<Array<TodoItemType>>([]);

    useEffect(() => {
        fetchTodoList();
    }, []);

    const fetchTodoList = async () => {
        setTodoList([]);

        try {
            const response = await axios.get(BASEURI);
            setTodoList(response.data);
        } catch (e) {
            if (e instanceof Error) alert("조회 실패 :" + e.message);
            else alert("조회 실패 :" + e);
        }
    };

    const addTodo = async (todo: string, desc: string, callback: () => void) => {
        try {
            const response = await axios.post(BASEURI, {todo, desc});

            if (response.data.status === "success") {
                let newTodoList = produce(todoList, (draft) => {
                    draft.push({...response.data.item, done: false});
                });
                setTodoList(newTodoList);
                callback();
            } else {
                alert("할 일 추가 실패:" + response.data.message);
            }
        } catch (e) {
            if (e instanceof Error) alert("할 일 추가 실패:" + e.message);
            else alert("할 일 추가 실패:" + e);
        }
    };

    const deleteTodo = async (id: number) => {
        try {
            const response = await axios.delete(`${BASEURI}/${id}`);

            if (response.data.status === "success") {
                let index = todoList.findIndex((todo) => todo.id === id);
                let newTodoList = produce(todoList, (draft) => {
                    draft.splice(index, 1);
                });
                setTodoList(newTodoList);
            } else {
                alert("할 일 삭제 실패:" + response.data.message);
            }
        } catch (e) {
            if (e instanceof Error) alert("할 일 삭제 실패:" + e.message);
            else alert("할 일 삭제 실패:" + e);
        }
    };

    const toggleDone = async (id: number) => {
        try {
            let todoItem = todoList.find((todo) => todo.id === id);
            const response = await axios.put(`${BASEURI}/${id}`, {...todoItem, done: !todoItem?.done});

            if (response.data.status === "success") {
                let index = todoList.findIndex((todo) => todo.id === id);
                let newTodoList = produce(todoList, (draft) => {
                    draft[index].done = !draft[index].done;
                });
                setTodoList(newTodoList);
            } else {
                alert("완료 토글 실패 : " + response.data.message);
            }
        } catch (e) {
            if (e instanceof Error) alert("완료 토글 실패:" + e.message);
            else alert("완료 토글 실패:" + e);
        }
    };

    const updateTodo = async (id: number, todo: string, desc: string, done: boolean, callback: () => void) => {
        try {
            const response = await axios.put(`${BASEURI}/${id}`, {todo, desc, done});

            if (response.data.status === "success") {
                let index = todoList.findIndex((todo) => todo.id === id);
                let newTodoList = produce(todoList, (draft) => {
                    draft[index] = {...draft[index], todo, desc, done};
                });
                setTodoList(newTodoList);
                callback();
            } else {
                alert("할 일 수정 실패 : " + response.data.message);
            }
        } catch (e) {
            if (e instanceof Error) alert("할 일 수정 실패 :" + e.message);
            else alert("할 일 수정 실패 : " + e);
        }
    };

    const callbacks: CallbacksType = {addTodo, deleteTodo, updateTodo, toggleDone};
    const states: StatesType = {todoList};

    return <App callbacks={callbacks} states={states} />
};

export default AppContainer;