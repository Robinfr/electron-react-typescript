import { Reducer, combineReducers } from 'redux';

import { CounterState as CounterState, counterReducer } from './counterReducer';

export interface RootState {
    counter: CounterState
};

const initialState: RootState = {
    counter: {
        value: 0
    }
}

const rootReducer = combineReducers<RootState | undefined>({
    counter: counterReducer
});

export default rootReducer;