import { Reducer, combineReducers } from 'redux';

import { CounterState as CounterState, counterReducer } from './counterReducer';

export interface RootState {
    counter: CounterState;
}

export const rootReducer = combineReducers<RootState | undefined>({
    counter: counterReducer
});
