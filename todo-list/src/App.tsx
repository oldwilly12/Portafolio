import { Todo } from './types/types'
import { useState } from "react"
import React from 'react'
import AddTodo from './componets/AddTodo'
import TodoList from './componets/TodoList'


const mockTodos: Todo[] = [
  {
    id: 1,
    text: 'Ver el twitch 1',
    completed: true,
  },
  {
    id: 2,
    text: 'React con typescript',
    completed: false,
  },
  {
    id: 3,
    text: 'Scar ticket de la miduFest',
    completed: false,
  }
]

const App : React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(mockTodos)

  const addTodo = (text:string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false
    };

    setTodos([...todos, newTodo]);
  }

  return (
    <div className='d-flex justify-content-center flex-wrap p-2'>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={mockTodos}/>
    </div>
  )
}

export default App
