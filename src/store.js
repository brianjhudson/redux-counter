import {createStore, combineReducers} from 'redux'
import counter from './ducks/counter'

export default createStore(combineReducers({counter}))