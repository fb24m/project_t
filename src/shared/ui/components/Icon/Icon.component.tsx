import { IconProps } from './Icon.props'
import styles from './Icon.module.scss'
import clsx from 'clsx'

export const Icon = ({ className, icon, ...props }: IconProps) => {
	return <span {...props} className={clsx(styles.icon, className)}>{icon}</span>
}
