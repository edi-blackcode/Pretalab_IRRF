import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    return(
        <>
        <p>
            Count:
            <span>{count}</span>
            <button onClick={increment}>Add</button>
            <button onClick={decrement}>Subtract</button>
        </p>
        </>
    )
}

export default Counter
