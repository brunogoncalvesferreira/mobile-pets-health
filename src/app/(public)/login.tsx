import { Alert, Text, TextInput, View } from 'react-native'

import { ArrowLeft } from 'lucide-react-native'
import { router } from 'expo-router'
import { z } from 'zod'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '@/contexts/auth-context'
import { Header } from '@/components/header/header'
import { Button } from '@/components/button/button'

const SignInFormSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6),
})

type SignInForm = z.infer<typeof SignInFormSchema>

export default function Login() {
	const { handleAuthenticate } = useAuth()
	
	const { control, handleSubmit } = useForm<SignInForm>({
		resolver: zodResolver(SignInFormSchema),
	})

	async function handleSignIn(data: SignInForm) {
		try {
			await handleAuthenticate(data.email, data.password)
			
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<View className='flex-1 p-10'>
			<Header />

			<View className='flex-1 pt-10 space-y-10'>
				<View className='flex-row items-center gap-10'>
					<Button onPress={() => router.back()} className='w-10 h-10'>
						<Button.Icon icon={ArrowLeft} />
					</Button>

					<Text className='font-title text-xl text-zinc-700'>
						Faça seu login
					</Text>
				</View>

				<View>
					<Text className='font-subtitle text-zinc-700'>E-mail</Text>
					<Controller
						control={control}
						rules={{ required: 'Campo obrigatório' }}
						render={({ field: { onChange, onBlur, value } }) => {
							return (
								<TextInput
									className='border border-zinc-300 rounded-md px-4 py-3 mt-2'
									onBlur={onBlur}
									onChangeText={onChange}
									value={value}
								/>
							)
						}}
						name='email'
					/>
				</View>

				<View>
					<Text className='font-subtitle text-zinc-700'>Senha</Text>
					<Controller
						control={control}
						rules={{ required: 'Campo obrigatório' }}
						render={({ field: { onChange, onBlur, value } }) => {
							return (
								<TextInput
									className='border border-zinc-300 rounded-md px-4 py-3 mt-2'
									onBlur={onBlur}
									onChangeText={onChange}
									value={value}
									secureTextEntry
								/>
							)
						}}
						name='password'
					/>
				</View>

				<Button onPress={handleSubmit(handleSignIn)}>
					<Button.Title>Entrar</Button.Title>
				</Button>
			</View>
		</View>
	)
}
