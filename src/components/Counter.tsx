import * as React from 'react';

import { IncrementAction, DecrementAction, CounterAction } from '../actions/counterActions';

import './Counter.scss';

export interface Props {
    value: number;

    incrementValue: () => any;
    decrementValue: () => any;
}

const Counter: React.SFC<Props> = ({ value, incrementValue, decrementValue }) => (
    <div className="counter">
        <p>Current value: {value}</p>
        <p>
            <button onClick={incrementValue}>Increment</button>
            <button onClick={decrementValue}>Decrement</button>
        </p>
    </div>
);

export default Counter;
