import Button from '../components/Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { handleClick: { action: 'handleClick' } },
}

const Template = (args: any) => <Button {...args} />

export const Red = Template.bind({}) as any

Red.args = {
  backgroundColor: 'red',
  label: 'Press Me',
  size: 'md',
}

export const Silver = Template.bind({}) as any
Silver.args = {
  backgroundColor: 'Silver',
  label: 'Press Me',
  size: 'md',
}

export const Grey = Template.bind({}) as any
Grey.args = {
  backgroundColor: 'grey',
  label: 'Press Me',
  size: 'md',
}
