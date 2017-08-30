import request from './utils/request'

const API_HOST = 'https://swapi.co/api/'

function api(url, options) {
  return request(`${API_HOST}${url}`, {
    ...options,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
}

export function getAllPeople(nextPageParam) {
  return api(`people/${nextPageParam ? `?page=${nextPageParam}` : ''}`, {
    method: 'GET',
  })
}
