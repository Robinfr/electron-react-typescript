import { combineReducers, compose, applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { RootState, rootReducer } from '../reducers';

const configureStore = (initialState?: RootState): Store<RootState | undefined> => {
    const middlewares: any[] = [

    ];
    const enhancer = composeWithDevTools(
        applyMiddleware(...middlewares)
    );
    return createStore<RootState | undefined>(
        rootReducer,
        initialState,
        enhancer
    )
};

const store = configureStore();

export default store;

//TODO: add hot reloading