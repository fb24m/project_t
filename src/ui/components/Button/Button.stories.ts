import type { Meta, StoryObj } from '@storybook/react'
import { Button as CButton } from './Button.component'

const meta: Meta<typeof CButton> = {
	title: 'Button',
	component: CButton
}

export default meta

type Story = StoryObj<typeof CButton>

export const Button: Story = {
	args: {
		children: 'Button',
		type: 'button'
	},
	argTypes: {
		appearance: {
			options: ['primary', 'secondary', 'link', 'transparent'],
			control: { type: 'select' }
		},
		icon: {
			options: [undefined, 'login', 'arrow_forward', 'arrow_back'],
			control: { type: 'select' }
		},
		type: {
			options: ['button'],
			control: { type: 'select' }
		},
		iconPosition: {
			options: ['start', 'end'],
			control: { type: 'select' }
		}
	}
}