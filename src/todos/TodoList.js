import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewToDoForm';
import TodoListItem from './TodoListItem';
import { loadTodos, removeTodoRequest, completedTodoRequest } from './thunks';
import { displayAlert } from './thunks'; 
import './TodoList.css';
import { isLoading } from './reducers';

//This are props
const TodoList = ({ todos = [], onRemovePressed, onMarkAsCompleted, isLoading, startLoadingTodos }) => {

    useEffect (()=> {
        startLoadingTodos();
    },[]);

    const loadingMessage = <div>Loading todos...</div>;
    const content = (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem todo={todo}  onRemovePressed={onRemovePressed} onMarkAsCompleted={onMarkAsCompleted} />)}
    </div>
);
        return isLoading ? loadingMessage : content;
    };

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()), 
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onMarkAsCompleted: id => dispatch(completedTodoRequest(id))
});

export default connect( mapStateToProps, mapDispatchToProps)(TodoList);

