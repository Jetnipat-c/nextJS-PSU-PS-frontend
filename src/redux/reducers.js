import { combineReducers } from 'redux'
import { ProfileReducer } from './profile/reducer'

export const reducers = combineReducers({
    Profile: ProfileReducer
})