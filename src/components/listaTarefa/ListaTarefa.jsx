import styles from './listaTarefa.module.css'
import { nanoid } from 'nanoid'
import { useState } from 'react'

function ListaTarefa() {
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
    <form onSubmit={handleCreateNewItem}>
        <input className={styles.taskBox} data-testid="input-item" placeholder="Digite seu item" onChange={handleInput} value={item}/>
        <button data-testid="btn-item" type="submit">Criar item</button>
    </form>
    <main>
        <h1>Minha lista de tarefas</h1>
        <div>
            {list.map(item => {
                return (
                    <p key={item.id}>
                        {item.title}
                        <button data-testid="btn-remove-item" onClick={() => deleteItem(item.id)}>Apagar</button>
                    </p>
                )
            })}       
        </div>
    </main>
    </>
    )
}

export default ListaTarefa

/*
<div className={styles.header}>
<h1>
Deixe um comentário
</h1>
<img src={relaxImg} />
</div>*/