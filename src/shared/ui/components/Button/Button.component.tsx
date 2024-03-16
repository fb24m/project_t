import type { ButtonProps } from './Button.props'
import styles from './Button.module.scss'
import { Icon } from '../Icon/Icon.component'
import clsx from 'clsx'

export const Button = ({ className, appearance = 'primary', children, icon, iconPosition = 'start', ...props }: ButtonProps) => {
	return (
		<button className={clsx(
			className,
			styles.button,
			styles[appearance],
			icon && styles.icon,
			styles[iconPosition]
		)} {...props}
		>
			{iconPosition === 'start' && icon && <Icon className={styles.iconItem} icon={icon} />}
			{children}
			{iconPosition === 'end' && icon && <Icon className={styles.iconItem} icon={icon} />}
		</button>
	)
}
