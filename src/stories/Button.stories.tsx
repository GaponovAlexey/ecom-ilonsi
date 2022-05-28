import Button from '../components/Button'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    zeplinLink:
      'https://app.zeplin.io/project/628f8dc0791d54afc8028f58/screen/628f8e2d4fe2c9b363c35549',
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.label}</Button>
)

export const Primary = Template.bind({})
Primary.args = {
  label: 'Primary',
  backgroundColor: 'blue',
}
Primary.parameters = {
  zeplinLink:
    'zpl://screen?pid=6292627ef98cc317986e5c52&sid=62926281bcdeda13bcda8b61',
}

export const Silver = Template.bind({})
Silver.args = {
  backgroundColor: 'pink',
  size: 'md',
}
