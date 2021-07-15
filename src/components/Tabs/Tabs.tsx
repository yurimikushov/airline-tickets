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
    {tabs.map(({ title, checked }) => (
      <Tab
        key={title}
        title={title}
        checked={checked}
        onSwitch={() => onSwitch(title)}
      />
    ))}
  </div>
)

export { Tabs }
