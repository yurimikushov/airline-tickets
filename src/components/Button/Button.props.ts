import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode
  pending?: boolean
}

export type { ButtonProps }