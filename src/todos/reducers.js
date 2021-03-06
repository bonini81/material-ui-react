import { 
  CREATE_TODO, 
  REMOVE_TODO, 
  COMPLETED_TODO,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
  loadTodosFailure, 
 } from "./actions";


export const isLoading = (state = false, action) => {
  const { type } = action;

  switch(type) {
  case LOAD_TODOS_IN_PROGRESS:
    return true;
    case LOAD_TODOS_SUCCESS:
    case LOAD_TODOS_FAILURE:
      return false;
      default:
        return state;

  }

}
//const initialState = { isLoading: false, data: [] }

export const todos = (state=[], action) => {
  
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload;
      return state.concat(todo);
    }

    case COMPLETED_TODO: {
    
        const { todo: todoToMarkAsComplete } = payload;
        return state.map(todo => {
         if ( todo.id === todoToMarkAsComplete.id) {
           return todoToMarkAsComplete;
        }
          return todo;
    
        });
      };
      
    
    

    case REMOVE_TODO: {
      const { todo: todoToRemove } = payload;
      return state.filter(todo => todo.id !== todoToRemove.id);
    }

    case LOAD_TODOS_SUCCESS: {
      const { todos } = payload;
      return todos;
    }

    case LOAD_TODOS_IN_PROGRESS: 
      
      case LOAD_TODOS_FAILURE:
    default:
      return state;
  }

 }