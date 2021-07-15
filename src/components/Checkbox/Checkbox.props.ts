import { DetailedHTMLProps, HTMLAttributes } from 'react'

interface CheckboxProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  checked: boolean,
  title: string,
  onChange: () => void
}

export type { CheckboxProps }