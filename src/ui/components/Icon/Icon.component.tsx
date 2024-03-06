import { classList } from '../../../functions/classList'
import { IconProps } from './Icon.props'
import styles from './Icon.module.scss'

export const Icon = ({ className, icon, ...props }: IconProps) => {
	return <span {...props} {...classList(styles.icon, className)}>{icon}</span>
}
