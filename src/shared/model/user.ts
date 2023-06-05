export interface UserRegisterRequest {
  name: string
  nickName: string
  email: string
  password: string
}

export interface UserRegisterResponse {
  name: string
  nickName: string
}

export interface UserLoginRequest {
  emailOrNickName: string
  password: string
}

export interface UserLoginResponse {
  name: string
  nickName: string
  token: string
}
