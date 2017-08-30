import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import todoReducer from './data/todo/reducer'
import userReducer from './data/users/reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'

const rootReducer = combineReducers({
  todos: todoReducer,
  users: userReducer,
})

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)
// persistStore(store)

export default store
