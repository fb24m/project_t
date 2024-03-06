import type { InputProps } from './Input.props'
import styles from './Input.module.scss'
import { classList } from '../../../functions/classList'
import { forwardRef } from 'react'
import { Icon } from '../Icon/Icon.component'

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, invalid, icon, ...props }: InputProps, ref) => {
	return (
		<div className={styles.wrapper}>
			{icon && <Icon icon={icon} className={styles.icon} />}
			<input {...classList(styles.input, className, invalid ? styles.invalid : '', icon && styles.withIcon)} {...props} ref={ref} />
		</div>
	)
})