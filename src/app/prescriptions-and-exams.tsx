import { ScrollView, Text, TextInput, View } from 'react-native'
import { Header } from '../components/header/header'
import { Button } from '../components/button/button'
import { Calendar } from 'lucide-react-native'
import { DateTimePickerComponent } from '../components/date-time-picker-component/date-time-picker-component'
import { useState } from 'react'
import type { DateTimePickerEvent } from '@react-native-community/datetimepicker'

export default function PrescriptionsAndExams() {
	const [date, setDate] = useState(new Date())

	const [mode, setMode] = useState('date')
	const [show, setShow] = useState(false)

	const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
		const currentDate = selectedDate
		setShow(false)
		setDate(currentDate!)
	}

	const showMode = (currentMode: string) => {
		setShow(true)
		setMode(currentMode)
	}

	const showDatePicker = () => {
		showMode('date')
	}

	const formattedDate = () => {
		const day = date.getDate()
		const month = date.getMonth() + 1
		const year = date.getFullYear()

		return `${day}/${month}/${year}`
	}

	return (
		<View className='flex-1 p-10'>
			<Header />

			<Text className='py-10 text-2xl font-title text-zinc-700'>
				Receituários e Exames
			</Text>

			<ScrollView showsVerticalScrollIndicator={false}>
				<View className='space-y-10'>
					<View>
						<Text className='font-subtitle text-zinc-700'>
							Descrição do receituário
						</Text>
						<TextInput className='border border-zinc-300 rounded-md px-4 py-3 mt-2' />
					</View>

					<View>
						<Text className='font-subtitle text-zinc-700'>
							Descrição do exame
						</Text>
						<TextInput className='border border-zinc-300 rounded-md px-4 py-3 mt-2' />
					</View>

					<View className='space-y-2'>
						<Text className='font-subtitle text-zinc-700'>Data</Text>
						<View className='flex-row items-center gap-2'>
							<Button onPress={showDatePicker} className='w-10 h-10'>
								<Button.Icon icon={Calendar} />
							</Button>
							<TextInput
								value={formattedDate()}
								className='flex-1 border border-zinc-300 rounded-md px-4 py-3 mt-2'
							/>
						</View>
					</View>

					<Button>
						<Button.Title>Registrar</Button.Title>
					</Button>
				</View>

				{show && (
					<DateTimePickerComponent
						value={date}
						mode={mode}
						onChange={onChange}
					/>
				)}
			</ScrollView>
		</View>
	)
}
