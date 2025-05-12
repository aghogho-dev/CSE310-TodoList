import { useState } from "react"


export default function TodoForm({ addTodo }) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        
        if (newItem === "") return

        addTodo(newItem)

        setNewItem("");
    }

    return (
        <form className="new-item-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input 
                    type="text" 
                    id="item" 
                    value={newItem} 
                    onChange={e => setNewItem(e.target.value)}
                    placeholder="Add a new item"
                />
            </div>
            <button className="btn">Add</button>
        </form>
    )
}