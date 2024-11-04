import { Todo } from '../types/types'

interface props {
    todo: Todo;
}
const TodoItem: React.FC<props> = ({todo}) => {
    return (
        <li>
            <input 
                type='checkbox'
                checked={todo.completed}
                onChange={() => {}}
            />
            <span>{todo.text}</span>
            <button> X </button>
        </li>
    );
};

export default TodoItem;