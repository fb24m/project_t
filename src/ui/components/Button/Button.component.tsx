import type { ButtonProps } from './Button.props'
import styles from './Button.module.scss'
import { classList } from '../../../functions/classList'
import { Icon } from '../Icon/Icon.component'

export const Button = ({ className, appearance = 'primary', children, icon, iconPosition = 'start', ...props }: ButtonProps) => {
	return (
		<button {...classList(className, styles.button, styles[appearance], icon && styles.icon, styles[iconPosition])} {...props}>
			{iconPosition === 'start' && icon && <Icon icon={icon} />}
			{children}
			{iconPosition === 'end' && icon && <Icon icon={icon} />}
		</button>
	)
}
