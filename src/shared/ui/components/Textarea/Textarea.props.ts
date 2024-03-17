import type { InputHTMLAttributes, RefCallback } from 'react'

export interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
	ref: RefCallback<HTMLInputElement> | null
	invalid?: boolean
	icon?: string
}