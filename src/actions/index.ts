import { CounterActions } from './counterActions';

export type RootActions = CounterActions[keyof CounterActions];