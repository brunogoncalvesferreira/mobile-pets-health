import { Text, View } from 'react-native'

interface Props {
	petName: string
	specie: string
	breed: string
	age: string
}

export function CardMyPets({ petName, specie, breed, age }: Props) {
	return (
		<View className='bg-zinc-200 p-5 rounded-lg space-y-10 mt-4'>
			<View>
				<Text className='font-title text-2xl'>{petName}</Text>
				<Text className='text-zinc-600 font-subtitle text-lg'>
					<Text className='text-green-700'>{age}</Text> anos de idade
				</Text>
			</View>

			<View>
				<Text className='font-title text-2xl'>Especie {specie}</Text>
				<Text className='text-zinc-600 font-subtitle text-lg'>
					Raça {breed}
				</Text>
			</View>
		</View>
	)
}
