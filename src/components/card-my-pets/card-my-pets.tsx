import { Text, View } from 'react-native'

interface Props {
	name: string
	specie: string
	breed: string
	age: number
}

export function CardMyPets({ name, specie, breed, age }: Props) {
	return (
		<View className='bg-zinc-200 p-5 rounded-lg space-y-10 mt-4'>
			<View>
				<Text className='font-title text-xl'>{name}</Text>
				<Text className='text-zinc-600 font-subtitle text-lg'>
					<Text className='text-green-700'>{age}</Text> anos de idade
				</Text>
			</View>

			<View>
				<Text className='font-title text-sm'>Especie {specie}</Text>
				<Text className='text-zinc-600 font-subtitle text-lg'>
					Raça {breed}
				</Text>
			</View>
		</View>
	)
}
