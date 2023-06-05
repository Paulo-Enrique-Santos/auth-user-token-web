import { keyframes } from '@emotion/react'

export const showLoginAnimation = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(50%);
  }
`

export const showRegisterAnimation = keyframes`
  from {
    transform: translateX(50%);
  }
  to {
    transform: translateX(0%);
  } 
`
