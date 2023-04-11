import axios from 'axios';

type TodoType = {
    id: number;
    todo: string;
    done: boolean;
    desc: string;
};

const listUrl = "/api/todolist_long/gdhong";
const todoUrlPrefix = "/api/todolist_long/gdhong/";

const requestAPI = async () => {
    let todo: TodoType;
    let todoList: Array<TodoType>;

    let response = await axios.get(listUrl);
    todoList = response.data;
    console.log("# TodoList : ", todoList);

    response = await axios.get(todoUrlPrefix + todoList[0].id);
    console.log("## 첫 번째 Todo : ", response.data);

    response = await axios.get(todoUrlPrefix + todoList[1].id);
    console.log("## 두 번째 Todo : ", response.data);
};

requestAPI();

type Props = {};

const App = (props: Props) => {
    return (
        <h2>Console.log 를 확인하세요.</h2>
    );
};

export default App;