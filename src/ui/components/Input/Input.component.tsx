import type { InputProps } from './Input.props'
import styles from './Input.module.scss'

export const Input = ({ className, ...props }: InputProps) => {
	return (
		<input className={`${className} ${styles.input}`} {...props} />
	)
}
