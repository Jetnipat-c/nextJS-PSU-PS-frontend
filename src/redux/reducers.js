import { combineReducers } from 'redux'
import { ProfileReducer } from './profile/reducer'
import { Form001Reducer } from './form001/reducer'
export const reducers = combineReducers({
    Profile: ProfileReducer,
    Form001: Form001Reducer
})