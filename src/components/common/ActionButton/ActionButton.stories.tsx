/**
 * ActionButton.stories
 * @package stories
 */
import { Story, Meta } from '@storybook/react/types-6-0'
/* components */
import { ActionButton, Props } from './index'

export default {
  components: ActionButton,
  title: 'ActionButton',
  argTypes: {},
} as Meta

const Template: Story<Props> = (args) => <ActionButton {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'first',
  disableFlg: false,
}

export const Second = Template.bind({})
Second.args = {
  label: 'second',
  disableFlg: true,
}
