import { ButtonPagesLinks } from '@/src/components/button-pages-links/button-pages-links'
import { Welcome } from '@/src/components/welcome/welcome'
import { router, type RelativePathString } from 'expo-router'
import { FlatList, ScrollView, Text, View } from 'react-native'

const dataLinks: { id: number; to: string; text: string }[] = [
	{ id: 1, to: 'my-pets', text: 'Meus pets' },
	{ id: 2, to: 'schedule', text: 'Agendamento' },
	{ id: 3, to: 'vaccines', text: 'Vacinas' },
	{ id: 4, to: 'medical-history', text: 'Histórico Veterinário' },
	{ id: 5, to: 'prescriptions-and-exams', text: 'Receituários e Exames' },
]

export default function Home() {
	return (
		<View className='flex-1 bg-green-200'>
			<Welcome />

			<View className='flex-1  bg-zinc-100 rounded-tl-3xl rounded-tr-3xl'>
				<View className='mt-10 px-4'>
					<FlatList
						data={dataLinks}
						keyExtractor={item => String(item.id)}
						renderItem={({ item }) => (
							<ButtonPagesLinks
								text={item.text}
								onPress={() =>
									router.navigate(`/${item.to}` as RelativePathString)
								}
							/>
						)}
						horizontal
						contentContainerStyle={{ gap: 12 }}
						showsHorizontalScrollIndicator={false}
					/>
				</View>

				<ScrollView showsVerticalScrollIndicator={false} className='p-10'>
					<Text className='mt-6 text-zinc-700 font-base'>
						Navegue entre as telas do app e veja as informações sobre os seus
						pets.
					</Text>
				</ScrollView>
			</View>
		</View>
	)
}
