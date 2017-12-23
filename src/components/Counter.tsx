import * as React from 'react';
import { IncrementAction, DecrementAction, CounterAction } from '../actions/counterActions';

export interface Props {
    value: number;

    incrementValue: () => IncrementAction;
    decrementValue: () => DecrementAction;
}

const Counter: React.SFC<Props> = ({ value, incrementValue, decrementValue }) => (
    <div>
        <p>Current value: {value}</p>
        <p>
            <button onClick={incrementValue}>Increment</button>
            <button onClick={decrementValue}>Decrement</button>
        </p>
    </div>
);

export default Counter;
