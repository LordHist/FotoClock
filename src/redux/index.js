import {applyMiddleware, createStore, compose} from 'redux';
import reducer from './reducers/';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from './middleware/logger';
const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware);

const configureStore = () => {
  return createStore(
    reducer,
    compose(
      middlewareEnhancer,
      typeof window === 'object' &&
        typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f,
    ),
  );
};

export default configureStore;
