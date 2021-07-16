import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

interface AlertProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode
}

export type { AlertProps }