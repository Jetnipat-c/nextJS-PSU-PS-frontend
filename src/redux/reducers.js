import { combineReducers } from 'redux'
import { ProfileReducer } from './profile/reducer'
import { Form001Reducer } from './form001/reducer'
import { Form001_2Reducer } from './form001_2/reducer'
export const reducers = combineReducers({
    Profile: ProfileReducer,
    Form001: Form001Reducer,
    Form001_2: Form001_2Reducer
})