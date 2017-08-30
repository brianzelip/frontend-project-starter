import { takeLatest, call, put, select } from 'redux-saga/effects'
import { FETCH_USERS, FETCH_MORE_USERS } from './constants'
import { fetchUsersSuccess, fetchUsersFailure } from './actions'
import { selectNextPage } from './selectors'

import { getAllPeople } from '../../api'

export default function* getUsersSaga() {
  yield takeLatest(FETCH_USERS, fetchUsers)
  yield takeLatest(FETCH_MORE_USERS, fetchMoreUsers)
}

function* fetchUsers() {
  try {
    const { results, next } = yield call(getAllPeople)
    const nextPage = next.split('page=')[1]
    yield put(fetchUsersSuccess(results, nextPage))
  } catch (error) {
    console.log(error)
    yield put(fetchUsersFailure(error.message))
  }
}

function* fetchMoreUsers() {
  const nextPageParameter = yield select(selectNextPage)
  try {
    const { results, next } = yield call(getAllPeople, nextPageParameter)
    const nextPage = next ? next.split('page=')[1] : ''
    yield put(fetchUsersSuccess(results, nextPage))
  } catch (error) {
    console.log(error)
    yield put(fetchUsersFailure(error.message))
  }
}
