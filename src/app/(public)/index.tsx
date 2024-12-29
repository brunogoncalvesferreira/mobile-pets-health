import { ScrollView, View } from 'react-native'

import { router } from 'expo-router'
import { Header } from '@/components/header/header'
import { Features } from '@/components/features/features'
import { Button } from '@/components/button/button'

export default function Index() {
	return (
		<View className='flex-1 p-10'>
			<Header />
			<ScrollView showsVerticalScrollIndicator={false}>
				<Features />
			</ScrollView>
			<View className='space-y-4 mt-10'>
				<Button onPress={() => router.navigate('/login')}>
					<Button.Title>Login</Button.Title>
				</Button>

				<Button onPress={() => router.navigate('/register')}>
					<Button.Title>Registrar</Button.Title>
				</Button>
			</View>
		</View>
	)
}
