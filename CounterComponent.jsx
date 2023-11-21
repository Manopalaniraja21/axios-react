// CounterComponent.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../counterSlice';

const CounterComponent = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default CounterComponent;
