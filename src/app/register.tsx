import { Text, TextInput, View } from 'react-native'
import { Header } from '../components/header/header'
import { Button } from '../components/button/button'
import { ArrowLeft } from 'lucide-react-native'
import { router } from 'expo-router'

export default function Register() {
	return (
		<View className='flex-1 p-10'>
			<Header />

			<View className='flex-1 pt-10 space-y-10'>
				<View className='flex-row items-center gap-10'>
					<Button onPress={() => router.back()} className='w-10 h-10'>
						<Button.Icon icon={ArrowLeft} />
					</Button>

					<Text className='font-title text-xl text-zinc-700'>
						Faça seu cadastro
					</Text>
				</View>

				<View>
					<Text className='font-subtitle text-zinc-700'>Seu nome</Text>
					<TextInput className='border border-zinc-300 rounded-md px-4 py-3 mt-2' />
				</View>

				<View>
					<Text className='font-subtitle text-zinc-700'>E-mail</Text>
					<TextInput className='border border-zinc-300 rounded-md px-4 py-3 mt-2' />
				</View>

				<View>
					<Text className='font-subtitle text-zinc-700'>Senha</Text>
					<TextInput
						className='border border-zinc-300 rounded-md px-4 py-3 mt-2'
						secureTextEntry
					/>
				</View>

				<Button>
					<Button.Title>Cadastrar</Button.Title>
				</Button>
			</View>
		</View>
	)
}
