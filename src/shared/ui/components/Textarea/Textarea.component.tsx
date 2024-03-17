import clsx from 'clsx'
import { forwardRef } from 'react'
import { Icon } from '../Icon/Icon.component'
import styles from './Textarea.module.scss'
import type { TextareaProps } from './Textarea.props'

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, invalid, icon, ...props }: TextareaProps, ref) => {
	return (
		<div className={clsx(styles.wrapper, className)}>
			{icon && <Icon icon={icon} className={styles.icon} />}
			<textarea className={clsx(styles.input, invalid ? styles.invalid : '', icon && styles.withIcon)} rows={4} {...props} ref={ref} />
		</div>
	)
})