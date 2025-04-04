import React, {useState} from "react";

function Counter() {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(0);
    }

    return (
        <div>
            <p className = "counter"> {counter}</p>
            <div className="buttons">
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
                <button onClick={increment}>Increment</button>
            </div>
        </div>
    )
}
export default Counter