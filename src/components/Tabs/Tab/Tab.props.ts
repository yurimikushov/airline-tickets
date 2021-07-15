import { DetailedHTMLProps, HTMLAttributes } from 'react'

interface TabProps  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string
  checked: boolean
  onSwitch: () => void
}

export type { TabProps }
