import { router, Slot } from 'expo-router'

import {
	useFonts,
	Rubik_400Regular,
	Rubik_600SemiBold,
	Rubik_700Bold,
} from '@expo-google-fonts/rubik'

import { Loading } from '@/components/loading/loading'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/react-query'
import { AuthContextProvider, useAuth} from '@/contexts/auth-context'
import { useEffect } from 'react'

function InitialLayout() {
	const { isSignedIn, isLoaded } = useAuth()
	
	useEffect(() => {
		if(isLoaded) return

		if(isSignedIn) {
			router.replace('/(auth)/(tabs)/home')
		} else {
			router.replace('/(public)')
		}

	}, [isSignedIn])

	return <Slot/>
}

export default function Layout() {

	const [fontsLoaded] = useFonts({
		Rubik_400Regular,
		Rubik_600SemiBold,
		Rubik_700Bold,
	})

	if (!fontsLoaded) {
		return <Loading />
	}

	return (
		<QueryClientProvider client={queryClient}>
			<AuthContextProvider>
				<InitialLayout />
			</AuthContextProvider>
		</QueryClientProvider>
	)
}
