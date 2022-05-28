import { FormInput } from '../components/FormInput'
import {storiesOf, ComponentStory, ComponentMeta } from '@storybook/react'




export default {
  title: 'Components/Button',
  component: FormInput,
} as ComponentMeta<typeof FormInput>

const Template: ComponentStory<typeof FormInput> = (args) => (
  <FormInput {...args}>{args.label}</FormInput>
)

export const MyFormInput = Template.bind({})
