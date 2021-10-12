import React from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewToDoForm';
import TodoListItem from './TodoListItem';
import { removeTodo, completedTodo } from './actions';
import './TodoList.css';

const TodoList = ({ todos = [], onRemovePressed, onMarkAsCompleted }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem todo={todo}  onRemovePressed={onRemovePressed} onMarkAsCompleted={onMarkAsCompleted} />)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onMarkAsCompleted: text => dispatch(completedTodo(text)),
});

export default connect( mapStateToProps, mapDispatchToProps)(TodoList);