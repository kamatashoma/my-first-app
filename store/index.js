import { createStore, combineReducers } from 'redux';
import { useReducer } from './reducers/user';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  user: useReducer,
});

const store = createStore(rootReducer, composeWithDevTools);

export default store;
