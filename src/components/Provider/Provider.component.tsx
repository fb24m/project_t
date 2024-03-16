import { type ReactNode, Suspense } from 'react'
import { Container } from '@/shared/ui/components/Container/Container.component'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export const Provider = ({ children }: { children: ReactNode }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<Suspense fallback={<Container>Loading..</Container>}>
				{children}
			</Suspense>
		</QueryClientProvider>
	)
}