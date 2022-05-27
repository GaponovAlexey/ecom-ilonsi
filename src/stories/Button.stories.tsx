import Button from '../components/Button'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = ({args, children}) => (
  <Button {...args}>{children}</Button>
)

//👇 Each story then reuses that template
export const Primary = Template.bind({})
Primary.args = { backgroundColor: '#ff0' }

export const Silver = Template.bind({
  args: { backgroundColor: '#ccc', label: 'Buttonыыыы' },
})

Silver.args = {
  backgroundColor: '#fff',
  size: 'md',
}

export const WrapOverflowssss = Template.bind({})
WrapOverflowssss.args = {
  ...Primary.args,
}
