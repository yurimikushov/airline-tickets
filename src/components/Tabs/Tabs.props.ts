import { DetailedHTMLProps, HTMLAttributes } from 'react'

interface Tab {
  title: string
  checked: boolean
}

interface TabsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  tabs: Tab[]
  onSwitch: (tab: Tab) => void
}

export type { TabsProps }
