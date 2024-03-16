import type { InputProps } from './Input.props'
import styles from './Input.module.scss'
import { forwardRef } from 'react'
import { Icon } from '../Icon/Icon.component'
import clsx from 'clsx'

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, invalid, icon, ...props }: InputProps, ref) => {
	return (
		<div className={clsx(styles.wrapper, className)}>
			{icon && <Icon icon={icon} className={styles.icon} />}
			<input className={clsx(styles.input, invalid ? styles.invalid : '', icon && styles.withIcon)} {...props} ref={ref} />
		</div>
	)
})