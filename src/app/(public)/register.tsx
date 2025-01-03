import { Text, TextInput, View } from 'react-native'

import { ArrowLeft } from 'lucide-react-native'
import { router } from 'expo-router'

import { z } from 'zod'
import { Header } from '@/components/header/header'
import { Button } from '@/components/button/button'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { createTutor } from '@/http/create-tutor'
import { useState } from 'react'

const RegisterFormSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	password: z.string().min(6),
})

type RegisterForm = z.infer<typeof RegisterFormSchema>

export default function Register() {
	const [isLoading, setIsLoading] = useState(false)

	const { control, handleSubmit } = useForm<RegisterForm>({
		resolver: zodResolver(RegisterFormSchema),
	})

	const { mutateAsync: createTutorFn } = useMutation({
		mutationFn: createTutor
	})

	async function handleRegister(data: RegisterForm) {

		try {
			setIsLoading(true)

			await createTutorFn({
				name: data.name,
				email: data.email,
				password: data.password,
			})

			setIsLoading(false)
			router.navigate('/login')

		} catch (error) {
			console.log(error)
			setIsLoading(false)
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
						Faça seu cadastro
					</Text>
				</View>

				<View>
					<Text className='font-subtitle text-zinc-700'>Seu nome</Text>
					<Controller
						control={control}
						name='name'
						render={({field: {onChange, onBlur, value}}) => (
							<TextInput
								className='border border-zinc-300 rounded-md px-4 py-3 mt-2'
								onBlur={onBlur}
								onChangeText={onChange}
								value={value}
							/>
						)}
					/>
				</View>

				<View>
					<Text className='font-subtitle text-zinc-700'>E-mail</Text>
					<Controller
						control={control}
						name='email'
						render={({field: {onChange, onBlur, value}}) => (
							<TextInput
								className='border border-zinc-300 rounded-md px-4 py-3 mt-2'
								onBlur={onBlur}
								onChangeText={onChange}
								value={value}
							/>
						)}
					/>
				</View>

				<View>
					<Text className='font-subtitle text-zinc-700'>Senha</Text>
					<Controller
						control={control}
						name='password'
						render={({field: {onChange, onBlur, value}}) => (
							<TextInput
								className='border border-zinc-300 rounded-md px-4 py-3 mt-2'
								onBlur={onBlur}
								onChangeText={onChange}
								value={value}
								secureTextEntry
							/>
						)}
					/>
				</View>

				<Button onPress={handleSubmit(handleRegister)} disabled={isLoading} isLoading={isLoading}>
					<Button.Title>Cadastrar</Button.Title>
				</Button>
			</View>
		</View>
	)
}
