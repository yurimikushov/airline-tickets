import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

interface TicketsLayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode
}

export type { TicketsLayoutProps }