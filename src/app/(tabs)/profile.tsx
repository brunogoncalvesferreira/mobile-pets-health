import { Button } from '@/src/components/button/button'
import { Header } from '@/src/components/header/header'
import { Edit } from 'lucide-react-native'
import { Text, TextInput, View } from 'react-native'

export default function Profile() {
	return (
		<View className='flex-1 p-10'>
			<Header />

			<Text className='font-title text-xl text-zinc-700 py-10'>Meu perfil</Text>

			<View className='space-y-4 mt-10'>
				<View>
					<Text className='font-subtitle text-zinc-700'>Nome</Text>
					<TextInput
						value='John Doe'
						className='border border-zinc-300 rounded-md px-4 py-3 mt-2'
					/>
				</View>

				<View>
					<Text className='font-subtitle text-zinc-700'>E-mail</Text>
					<TextInput
						value='d6TtA@example.com'
						className='border border-zinc-300 rounded-md px-4 py-3 mt-2'
					/>
				</View>

				<View>
					<Text className='font-subtitle text-zinc-700'>Senha</Text>
					<TextInput
						value='d6TtA@example.com'
						className='border border-zinc-300 rounded-md px-4 py-3 mt-2'
						secureTextEntry
					/>
				</View>

				<Button className='space-x-2'>
					<Button.Icon icon={Edit} />
					<Button.Title>Editar perfil</Button.Title>
				</Button>
			</View>
		</View>
	)
}
