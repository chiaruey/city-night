import {createStore, applyMiddleware, compose} from 'redux';
import {MakeStoreOptions} from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';

import {root} from '../saga/rootSaga';

import {rootReducer} from './reducers/root';
import {ExplorerState} from './ExplorerState';

export function createReduxStore(initialState: ExplorerState, {isServer, req}: MakeStoreOptions) {
  let composeEnhancers: typeof compose;
  const sagaMiddleware = createSagaMiddleware();

  if (!isServer) {
    // On the client only, wire into redux dev tools extension, if present
    const reduxDevtoolsCompose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    composeEnhancers = (reduxDevtoolsCompose && reduxDevtoolsCompose({trace: true})) || compose;
  } else {
    composeEnhancers = compose;
  }

  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));

  if (req || !isServer) {
    console.log('store.ts --> inside the if block ');
    // Wire up next-redux-saga: https://github.com/bmealhouse/next-redux-saga
    (store as any).sagaTask = sagaMiddleware.run(root);
  }

  return store;
}
