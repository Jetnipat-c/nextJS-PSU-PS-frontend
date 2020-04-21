import { createStore } from 'redux';
import { reducers } from './reducers'

export const initializeStore = (state) =>{
    return createStore(reducers,state)
}