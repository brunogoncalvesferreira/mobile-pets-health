import { FlatList, Text, View } from 'react-native'
import { Header } from '../components/header/header'
import { CardMyPets } from '../components/card-my-pets/card-my-pets'

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

			<Text className='py-10 text-2xl font-title text-zinc-700'>Meus Pets</Text>

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
