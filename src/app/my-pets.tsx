import { FlatList, Text, View } from 'react-native'
import { Header } from '../components/header/header'
import { CardMyPets } from '../components/card-my-pets/card-my-pets'
import { Button } from '../components/button/button'
import { router } from 'expo-router'
import { ArrowLeft } from 'lucide-react-native'

const data = [
	{ id: 1, petName: 'Rex', specie: 'Cachorro', breed: 'Poodle', age: '1' },
	{ id: 2, petName: 'Billy', specie: 'Cachorro', breed: 'Poodle', age: '10' },
	{ id: 3, petName: 'Princesa', specie: 'Cachorro', breed: 'Poodle', age: '2' },
	{ id: 4, petName: 'Pit', specie: 'Vaca', breed: 'Poodle', age: '8' },
	{ id: 5, petName: 'Hercules', specie: 'Gato', breed: 'Poodle', age: '5' },
]

export default function MyPets() {
	return (
		<View className='flex-1 p-10'>
			<Header />

			<View className='flex-row items-center gap-10 py-10'>
				<Button onPress={() => router.back()} className='w-10 h-10'>
					<Button.Icon icon={ArrowLeft} />
				</Button>

				<Text className='font-title text-xl text-zinc-700'>Meus pets</Text>
			</View>

			<FlatList
				data={data}
				renderItem={({ item }) => (
					<CardMyPets
						petName={item.petName}
						specie={item.specie}
						breed={item.breed}
						age={item.age}
					/>
				)}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	)
}
