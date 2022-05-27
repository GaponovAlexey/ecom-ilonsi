import Button from '../components/Button'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    handleClick: { action: 'clicked' },
    label: { defaultValue: 'Click me' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

//👇 Each story then reuses that template
export const Primary = Template.bind({})
Primary.args = { backgroundColor: '#ff0', label: 'Button' }

export const Silver = Template.bind({
  args: { backgroundColor: '#ccc', label: 'Buttonыыыы' },
})

Silver.args = {
  backgroundColor: '#fff',
  label: 'Black',
  size: 'md',
}

export const WrapOverflowssss = Template.bind({})
WrapOverflowssss.args = {
  ...Primary.args,
  label: 'Primary with a really long name',
}