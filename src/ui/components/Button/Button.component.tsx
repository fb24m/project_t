import type { ButtonProps } from './Button.props'
import styles from './Button.module.scss'

export const Button = ({ className, appearance = 'primary', ...props }: ButtonProps) => {
	console.log(styles[appearance])

	return (
		<button className={`${className} ${styles.button} ${styles[appearance]}`} {...props} />
	)
}
