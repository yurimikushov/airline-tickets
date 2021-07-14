import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode
}

export type { CardProps }