import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getTodos } from './selectors';
import { addTodoRequest } from './thunks'; 
import './NewTodoForm.css';

const NewTodoForm = ( { todos, onCreatePressed } ) => {
    const [inputValue, setInputValue] = useState('');

    return (
   
        <div className="new-todo-form">
                 <h2>Add Your To Do:</h2>
            <input
                className="new-todo-input"
                type="text"
                placeholder="Type your new todo here"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)} />
            <button className="new-todo-button"
            onClick={ ()=> {
                const isDuplicateText = 
                    todos.some( todo => todo.text === inputValue );
                    if (!isDuplicateText) {
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }

            } 
        
        } 
            >Create Todo</button>
        </div>
    );
};

const mapStateToProps = state => ({
    todos: getTodos(state), 
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text)),

});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);