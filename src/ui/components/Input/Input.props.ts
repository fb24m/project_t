import type { InputHTMLAttributes, RefCallback } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	ref: RefCallback<HTMLInputElement> | null
	invalid?: boolean
	icon?: string
}