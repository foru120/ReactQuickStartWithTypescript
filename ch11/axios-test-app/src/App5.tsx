import axios from 'axios';

const requestAPI =async () => {
    const url = "/api/todolist_long/gdhong";
    let data = { todo: "윗몸일으키기 3세트", desc: "너무 빠르지 않게..."};
    const resp1 = await axios.post(url, data);
    console.log(resp1.data);
};

requestAPI();

type Props = {};

const App = (props: Props) => {
    return <h2>Console Log 를 확인합니다.</h2>;
};

export default App;