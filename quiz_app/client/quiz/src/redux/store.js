import { combineReducers, configureStore } from '@reduxjs/toolkit';
import questionReducer from './questionReducer';
import resultReducer from './resultReducer';

const rootReducer = combineReducers({
  questions: questionReducer,
  result: resultReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;



