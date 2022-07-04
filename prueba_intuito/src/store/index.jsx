import {combineReducers, createStore} from 'redux';
import FormReducers from '../Reducers/FormReducers';

const reducers = combineReducers({
    FormReducers
})

const store = createStore(
    reducers,
     window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;