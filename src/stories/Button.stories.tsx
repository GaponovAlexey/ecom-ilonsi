import Button from '../components/Button'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/Button',
  component: Button,
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = { backgroundColor: '#ff0', label: 'Button' }

export const Silver = Template.bind({})

Silver.args = {
  backgroundColor: 'silver',
  label: 'Press Me',
  size: 'md',
}
