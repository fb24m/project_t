import type { HTMLAttributes, HTMLInputTypeAttribute } from 'react'

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
	type?: HTMLInputTypeAttribute
	placeholder?: string
	required?: boolean
	name: string
	min?: number
	max?: number
}