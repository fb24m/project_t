import type { Meta, StoryObj } from '@storybook/react'
import { Input as CInput } from './Input.component'

const meta: Meta<typeof CInput> = {
	title: 'Button',
	component: CInput
}

export default meta

type Story = StoryObj<typeof CInput>

export const Input: Story = {
	args: {
		invalid: false,
		placeholder: 'Email'
	},
	argTypes: {
		icon: {
			options: [undefined, 'login', 'arrow_back', 'person', 'alternate_email'],
			control: { type: 'select' }
		}
	}
}