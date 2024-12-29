import { FlatList, Text, View } from 'react-native'
import { Header } from '@/components/header/header'
import { CardMyPets } from '@/components/card-my-pets/card-my-pets'
import { Button } from '@/components/button/button'
import { router } from 'expo-router'
import { ArrowLeft } from 'lucide-react-native'
import { useQuery } from '@tanstack/react-query'
import { getPets } from '@/http/get-pets'
import { useAuth } from '@/contexts/auth-context'

export default function MyPets() {
	const { tutor } = useAuth()

	const { id } = tutor

	const { data: getPetsFn } = useQuery({
		queryKey: ['pets'],
		queryFn: () => getPets(id),
	})

	return (
		<View className='flex-1 p-10'>
			<Header />

			<View className='flex-row items-center gap-10 py-10'>
				<Button onPress={() => router.back()} className='w-10 h-10'>
					<Button.Icon icon={ArrowLeft} />
				</Button>

				<Text className='font-title text-xl text-zinc-700'>Meus pets</Text>
			</View>

			{getPetsFn?.length === 0 ? (
				<Text className='text-center text-zinc-600'>
					Você não tem pets cadastrados
				</Text>
			) : (
				<FlatList
					data={getPetsFn}
					renderItem={({ item }) => (
						<CardMyPets
							name={item.name}
							specie={item.specie}
							breed={item.breed}
							age={item.age}
						/>
					)}
					showsVerticalScrollIndicator={false}
				/>
			)}
		</View>
	)
}
