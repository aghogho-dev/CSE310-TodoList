import './styles.css'
import { useState, useEffect } from "react"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

function App() {

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("todos")
    if (localValue === null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false
        }
      ]
    })
  }

  console.log(todos)

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
     return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <TodoForm addTodo={addTodo} />

      <h1 className="header">Todo List</h1>

      <TodoList 
      todos={todos} 
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}
      />
    </>
    
  )
}

export default App
