import Button from '../components/Button'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/Button2',
  component: Button,
  parameters: {
    zeplinLink: "https://app.zeplin.io/project/628f8dc0791d54afc8028f58/screen/628f8e2d4fe2c9b363c35549"
},
} as ComponentMeta<typeof Button>

// const Template: ComponentStory<typeof Button> = (args) => (
//   <Button {...args}>{args.label}</Button>
// )

export const Default = () => <Button  backgroundColor='blue'  label='ss'/>
export const Secondary = () => <Button label='second'  />

Default.story = {
    name: "Primary Button",
};

Secondary.story = {
    name: "Secondary Button",
};