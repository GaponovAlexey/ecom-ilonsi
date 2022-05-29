import Button from '../components/Button'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.label}</Button>
)

export const Primary = Template.bind({})
Primary.args = {
  label: 'Primary',
  backgroundColor: 'blue',
}

export const Silver = Template.bind({})
Silver.args = {
  backgroundColor: 'pink',
  size: 'md',
}
