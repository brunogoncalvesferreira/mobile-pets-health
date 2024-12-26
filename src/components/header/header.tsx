import { Image, Text, View } from 'react-native'

export function Header() {
	return (
		<View>
			<Image
				style={{ width: 40, height: 40 }}
				source={require('../../assets/logo.png')}
			/>
			<View className='mt-4'>
				<Text className='text-2xl font-bold text-gray-900 font-title'>
					Pets Health
				</Text>
				<Text className='text-gray-500 font-base'>
					Seu app para organizar a vida dos seus pets.
				</Text>
			</View>
		</View>
	)
}
