import React from 'react'
import Todo from './Todo'

export const TodoList =({todos, toggleComplete, handleDelete })=> {
    return (
        <ul key={todos.id}>
            {
                todos.map(todo => (
                    <Todo key={Todo.id} todo={todo} toggleComplete={toggleComplete} handleDelete={handleDelete} />
                ))
            }
        </ul>
    )
      
}
