import { DetailedHTMLProps, HTMLAttributes } from 'react'

interface CheckboxProps extends DetailedHTMLProps<HTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
  checked: boolean,
  title: string,
  onChange: () => void
}

export type { CheckboxProps }