import cn from 'classnames'
import { Tab } from './Tab/Tab'
import { TabsProps } from './Tabs.props'
import './Tabs.css'

const Tabs = ({
  className,
  tabs,
  onSwitch,
  ...props
}: TabsProps): JSX.Element => (
  <div className={cn(className, 'tabs')} {...props}>
    {tabs.map((tab) => (
      <Tab
        key={tab.title}
        title={tab.title}
        checked={tab.checked}
        onSwitch={() => onSwitch(tab)}
      />
    ))}
  </div>
)

export { Tabs }
