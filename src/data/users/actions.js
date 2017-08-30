import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_MORE_USERS,
} from './constants'

export const fetchUsers = () => ({
  type: FETCH_USERS,
})

export const fetchUsersSuccess = (users, nextPage) => ({
  type: FETCH_USERS_SUCCESS,
  payload: {
    data: users,
    nextPage,
  },
})

export const fetchUsersFailure = error => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
})

export const fetchMoreUsers = () => ({
  type: FETCH_MORE_USERS,
})
