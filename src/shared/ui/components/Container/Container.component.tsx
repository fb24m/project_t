import styles from './Container.module.scss'
import type { ContainerProps } from './Container.props'

export const Container = ({ className, size = 'normal', ...props }: ContainerProps) => {
	return (
		<div className={`${styles.container} ${className} ${styles[size]}`} {...props}></div>
	)
}