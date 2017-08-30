import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_MORE_USERS,
} from './constants'
import { merge, concat } from 'ramda'

const initialState = {
  data: [],
  error: '',
  nextPage: '',
  loaded: false,
  loading: false,
  isLoadingMore: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return merge(state, {
        loading: true,
      })
    case FETCH_USERS_SUCCESS:
      return merge(state, {
        loading: false,
        loaded: true,
        data: concat(state.data, action.payload.data),
        nextPage: action.payload.nextPage,
        isLoadingMore: false,
      })
    case FETCH_USERS_FAILURE:
      return merge(state, {
        loading: false,
        loaded: false,
        error: action.payload,
      })
    case FETCH_MORE_USERS:
      return merge(state, {
        isLoadingMore: true,
      })
    default:
      return state
  }
}

export default reducer
