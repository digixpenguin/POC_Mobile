import {
    compose,
    createStore,
    applyMiddleware
  } from 'redux'
  import thunkMiddleWare from 'redux-thunk'
  import { createLogger } from 'redux-logger'
  import reducers from '../reducers'
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ })
  
  export default function configureStore(initialState) {
    const enhancer = composeEnhancers(
      applyMiddleware(
        thunkMiddleWare,
        loggerMiddleware
      )
    )
    return createStore(reducers, initialState, enhancer)
  }
  