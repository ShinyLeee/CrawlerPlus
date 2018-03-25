import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import { History } from 'history';
import reducers from './reducers';

const __DEV__ = process.env.NODE_ENV === 'development';

const logger = createLogger({
  predicate: () => __DEV__,
  collapsed: true,
  duration: true,
  timestamp: true,
  diff: true,
});

const composeEnhancers =
__DEV__ && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false })
  : compose;

export default function configureStore(initState: Object, history: History) {
  const router = routerMiddleware(history);
  const middlewares = [
    logger,
    router,
  ];
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
  );

  return createStore(
    reducers,
    initState,
    enhancer,
  );
}
