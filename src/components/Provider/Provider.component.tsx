import { type ReactNode, Suspense } from 'react'
import { Container } from '../Container/Container.component'

export const Provider = ({ children }: { children: ReactNode }) => {
	return (
		<Suspense fallback={<Container>Loading..</Container>}>
			{children}
		</Suspense>
	)
}