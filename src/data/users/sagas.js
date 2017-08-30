import { takeLatest, call, put } from 'redux-saga/effects'
import { FETCH_USERS } from './constants'
import { fetchUsersSuccess, fetchUsersFailure } from './actions'

import { getAllPeople } from '../../api'

// export default function* usersSaga() {
//   yield takeLatest(FETCH_USERS, getUsers)
// }

// function* getUsers() {
//   yield call(API.getAllPeople)
// }

export default function* getUsersSaga() {
  yield takeLatest(FETCH_USERS, fetchUsers)
}

function* fetchUsers() {
  try {
    const { results } = yield call(getAllPeople)
    yield put(fetchUsersSuccess(results))
  } catch (error) {
    console.log(error)
    yield put(fetchUsersFailure(error.message))
  }
}
