import type { HTMLAttributes } from 'react'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	type?: 'submit' | 'button' | 'reset'
	appearance?: 'primary' | 'secondary' | 'link' | 'transparent'
	icon?: string
	iconPosition?: 'start' | 'end'
}