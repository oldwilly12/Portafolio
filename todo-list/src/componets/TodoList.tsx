import { Todo } from '../types/types'
import React from 'react';
import TodoItem from './TodoItem';

interface props {
    todos: Todo[];
}

const TodoList: React.FC<props> = ({ todos }) =>{
    return (
        <div className='d-flex justify-content-center p-2'>
            <ul>
                {todos.map((todo) => (
                        <TodoItem 
                            key={todo.id}
                            todo = {todo}
                        />
                ))}
            </ul>
        </div>
    )
};

export default TodoList;