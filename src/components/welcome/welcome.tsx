import { useAuth } from '@/contexts/auth-context'
import { Text, View } from 'react-native'
import { Button } from '../button/button'
import { LogOut } from 'lucide-react-native'

export function Welcome() {
	const { handleLogout, tutor } = useAuth()

	function logout() {
		handleLogout()
	}

	return (
		<View className='h-60'>
			<View className='flex-row justify-between items-center p-4'>
				<View>
					<Text className='text-2xl font-title text-zinc-700'>Bem vindo!</Text>
					<Text className='text-sm text-zinc-600'>{tutor.name}</Text>
				</View>

				<Button className='w-10 h-10' onPress={logout}>
					<Button.Icon icon={LogOut} />
				</Button>
			</View>
		</View>
	)
}
