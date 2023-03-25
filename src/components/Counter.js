import { useState } from 'react';

const Counter = () => {

    let [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    
    return (
        <div>
            <button onClick={increment}>+1</button>
            <span>{count}</span>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
};

export default Counter;