import Button from '../components/Button'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    zeplinLink: "https://app.zeplin.io/project/628f8dc0791d54afc8028f58/screen/628f8e2d4fe2c9b363c35549"
},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.label}</Button>
)

export const Primary = Template.bind({})
Primary.parameters = {
  zeplinLink: "zpl://screen?pid=628f8dc0791d54afc8028f58&sid=6292475b3c19091100a1f4d4"
  }

export const Silver = Template.bind({})
Silver.args = {
  backgroundColor: 'pink',
  size: 'md',
}
