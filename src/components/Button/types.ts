import { ReactNode } from 'react'

export type Button = {
  children: ReactNode
  background: 'red' | 'blue' | 'green'
  fontColor?: 'black'
}
