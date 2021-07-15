import { DetailedHTMLProps, HTMLAttributes } from 'react'

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  price: number
  carrier: string
}

export type { HeaderProps }
