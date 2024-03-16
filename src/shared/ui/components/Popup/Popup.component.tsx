import { classList } from '../../../functions/classList'
import styles from './Popup.module.scss'
import { PopupProps } from './Popup.props'

export const Popup = (props: PopupProps) => {
	return <div {...classList(styles.popup, styles[props.opened ? 'opened' : ''])}>
		<div className={styles.window}>
			{props.children}
		</div>
	</div>
}