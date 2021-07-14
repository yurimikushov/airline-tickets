import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode
}

export type { ButtonProps }