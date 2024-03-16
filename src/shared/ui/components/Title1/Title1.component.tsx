import type { TextProps } from '../../interfaces/Text.props'
import styles from './Title1.module.scss'

export const Title1 = ({ className, ...props }: TextProps) => {
	return (
		<h1 className={`${className} ${styles.title1}`} {...props} />
	)
}
