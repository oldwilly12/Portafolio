import React, { useState } from "react";


interface props {
    addTodo: (text:string) => void;
}
const AddTodo: React.FC<props> = ({addTodo}) => {

    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTodo(text);
        setText('')
    }

    
    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Nueva tarea"
            />
            <button type="submit">Agregar</button>
        </form>
    )
}

export default AddTodo;