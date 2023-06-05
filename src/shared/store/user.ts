const tokenUserKey: string = 'TOKEN_USER'

export function setTokenUserLocalStorage(token: string) {
  localStorage.setItem(tokenUserKey, token)
}

export function getTokenUserLocalStorage() {
  return localStorage.getItem(tokenUserKey)
}

export function removeTokenUserLocalStorage() {
  localStorage.removeItem(tokenUserKey)
}
