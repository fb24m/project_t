import type { HTMLAttributes } from 'react'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
	size?: 'small' | 'normal' | 'large'
}