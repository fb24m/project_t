import clsx from 'clsx'
import styles from './Popup.module.scss'
import { PopupProps } from './Popup.props'

export const Popup = (props: PopupProps) => {
	return <div className={clsx(styles.popup, props.opened && styles.opened)}>
		<div className={styles.window}>
			{props.children}
		</div>
	</div>
}