import usersSaga from './data/users/sagas'
import { fork } from 'redux-saga/effects'

const sagas = [usersSaga]

export default function* rootSaga() {
  yield sagas.map(saga => fork(saga))
}
