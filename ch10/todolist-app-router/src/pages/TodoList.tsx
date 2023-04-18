import { Link } from 'react-router-dom';
import TodoItem from './TodoItem';
import TodoActionCreator from '../redux/TodoActionCreator';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import { TodoStatesType, TodoItemType } from '../redux/TodoReducer';
import { RootStatesType } from '../redux/AppStore';

type Props = {
    todoList: Array<TodoItemType>;
    deleteTodo: (id: number) => void;
    toggleDone: (id: number) => void;
};

const TodoList = ({ todoList, deleteTodo, toggleDone }: Props) => {
    let todoItems = todoList.map((item) => {
        return <TodoItem key={item.id} todoItem={item} deleteTodo={deleteTodo} toggleDone={toggleDone} />;
    });

    return (
        <>
            <div className='row'>
                <div className='col p-3'>
                    <Link className='btn btn-primary' to='/todos/add'>
                        할 일 추가
                    </Link>
                    <button className='btn btn-primary ms-1'>
                        할 일 목록 새로고침
                    </button>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <ul className='list-group'>{todoItems}</ul>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state: RootStatesType) => ({
    todoList: state.todos.todoList
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
    deleteTodo: (id: number) => dispatch(TodoActionCreator.deleteTodo({id})),
    toggleDone: (id: number) => dispatch(TodoActionCreator.toggleDone({id}))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);