import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
    
    return <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map(
          todo => {
            return <TodoItem
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
                key={todo.id}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
          }
        )}
      </ul>
}