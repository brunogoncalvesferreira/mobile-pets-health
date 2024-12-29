import { Button } from '@/components/button/button'
import { Header } from '@/components/header/header'
import { useAuth } from '@/contexts/auth-context'
import { zodResolver } from '@hookform/resolvers/zod'
import { Edit } from 'lucide-react-native'
import { useForm, Controller } from 'react-hook-form'
import { Text, TextInput, View } from 'react-native'

import z from 'zod'

const ProfileFormSchema = z.object({
	name: z.string(),
	email: z.string(),
	password: z.string(),
})

type profileFormSchema = z.infer<typeof ProfileFormSchema>

export default function Profile() {
	const { tutor } = useAuth()

	const {control, handleSubmit} = useForm<profileFormSchema>({
		resolver: zodResolver(ProfileFormSchema),
		values: {
			name: tutor.name,
			email: tutor.email,
			password: '',
		},
	})

	async function handleProfile(data: profileFormSchema) {
		console.log(data)
	}

	return (
		<View className='flex-1 p-10'>
			<Header />

			<Text className='font-title text-xl text-zinc-700 py-10'>Meu perfil</Text>

			<View className='space-y-4 mt-10'>
				<View>
					<Text className='font-subtitle text-zinc-700'>Nome</Text>
					<Controller
						control={control}
						name='name'
						render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							value={value}
							className='border border-zinc-300 rounded-md px-4 py-3 mt-2'
							onChangeText={onChange}
							onBlur={onBlur}
						/>
						)}
					/>
				</View>

				<View>
					<Text className='font-subtitle text-zinc-700'>E-mail</Text>
					<Controller
						control={control}
						name='email'
						render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							value={value}
							className='border border-zinc-300 rounded-md px-4 py-3 mt-2'
							onChangeText={onChange}
							onBlur={onBlur}
						/>
						)}
					/>
				</View>

				<View>
					<Text className='font-subtitle text-zinc-700'>Senha</Text>
					<Controller
						control={control}
						name='password'
						render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							value={value}
							className='border border-zinc-300 rounded-md px-4 py-3 mt-2'
							secureTextEntry
							onChangeText={onChange}
							
						/>
						)}
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
