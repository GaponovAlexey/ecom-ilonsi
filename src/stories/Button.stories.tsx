import Button from '../components/Button'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.label}</Button>
)

//👇 Each story then reuses that template
export const Primary = Template.bind({})
Primary.args = { backgroundColor: '#ff0' }

export const Silver = Template.bind({})

Silver.args = {
  backgroundColor: '#fff',
  size: 'md',
}

export const WrapOverflowssss = Template.bind({})
WrapOverflowssss.args = {
  label: 'CLOTTTTT',
  backgroundColor: '#0f0',
  size: 'md',
}
WrapOverflowssss.parameters = {
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
      { name: 'blue', value: '#00f' },
    ],
  },
  docs: {
    description: {
      story:
        'This is a story that is used to test the wrapping of the overflow',
    },
  },
}
