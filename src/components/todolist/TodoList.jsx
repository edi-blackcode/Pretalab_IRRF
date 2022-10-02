import styles from './todoList.module.css'
import { nanoid } from 'nanoid'
import { useState } from 'react'

function TodoList() {
    const [list, setList] = useState([])
    const [item, setItem] = useState('')

    function handleInput(event) {
        setItem(event.target.value)
    }

    function handleCreateNewItem(event) {
        event.preventDefault()

        if (item === '') {
            return
        }

        const newItem =   {
            id: nanoid(),
            title: item
        }
  
        setList([...list, newItem]) 
        setItem('')
    }

    function deleteItem(id) {
        const newList = list.filter(tarefa => tarefa.id !== id)
        setList(newList)
    }

    return(
    <>
     <h1>Hello there! Welcome to my Todo List!</h1>
    <form onSubmit={handleCreateNewItem}>
        <input className={styles.taskBox} data-testid="input-item" placeholder="Digite seu item" onChange={handleInput} value={item}/>
        <button className={styles.createNewTask} data-testid="btn-item" type="submit">Create item</button>
    </form>
    <main>
        <h2>Write into the box your things todo before dying.</h2>
        <div>
            {list.map(item => {
                return (
                    <p key={item.id}>
                        {item.title}
                        <button data-testid="btn-remove-item" onClick={() => deleteItem(item.id)}>Delete</button>
                    </p>
                )
            })}       
        </div>
    </main>
    </>
    )
}

export default TodoList