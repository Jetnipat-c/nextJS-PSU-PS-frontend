import { createStore } from 'redux';
import reducers from './reducers'

export const intializeStore = (state) =>{
    return createStore(reducers,state)
}