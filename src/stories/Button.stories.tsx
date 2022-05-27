import Button from '../components/Button'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />


export const Red = Template.bind({})

Red.args = {
  backgroundColor: 'red',
  label: 'Press Me',
  size: 'md',
}

export const Silver = Template.bind({})

Silver.args = {
  backgroundColor: 'gray',
  label: 'silver',
  size: 'md',
}
