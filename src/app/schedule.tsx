import { useState } from 'react'
import { Text, TextInput, View, ScrollView } from 'react-native'

import { Button } from '../components/button/button'

import DateTimePicker, {
	type DateTimePickerEvent,
} from '@react-native-community/datetimepicker'
import { Header } from '../components/header/header'
import { Calendar, Clock } from 'lucide-react-native'

export default function Schedule() {
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

	const showTimerPicker = () => {
		showMode('time')
	}

	const formattedDate = () => {
		const day = date.getDate()
		const month = date.getMonth() + 1
		const year = date.getFullYear()

		return `${day}/${month}/${year}`
	}

	const formattedTime = () => {
		const hour = date.getHours()
		const minutes = date.getMinutes()

		return `${hour}:${minutes}`
	}

	return (
		<View className='flex-1 p-10'>
			<Header />

			<Text className='py-10 text-2xl font-title text-zinc-700'>
				Agendamento de consultas
			</Text>

			<ScrollView showsVerticalScrollIndicator={false}>
				<View className='space-y-10'>
					<View>
						<Text className='font-subtitle text-zinc-700'>
							Motivo da consulta
						</Text>
						<TextInput className='border border-zinc-300 rounded-md px-4 py-3 mt-2' />
					</View>

					<View>
						<Text className='font-subtitle text-zinc-700'>
							Nome do veterinário
						</Text>
						<TextInput className='border border-zinc-300 rounded-md px-4 py-3 mt-2' />
					</View>

					<View>
						<Text className='font-subtitle text-zinc-700'>
							Contato do veterinário
						</Text>
						<TextInput className='border border-zinc-300 rounded-md px-4 py-3 mt-2' />
					</View>

					<View className='space-y-2'>
						<Text className='font-subtitle text-zinc-700'>Data e hora</Text>
						<View className='flex-row items-center gap-2'>
							<Button className='w-10 h-10' onPress={showDatePicker}>
								<Button.Icon icon={Calendar} />
							</Button>
							<TextInput
								value={formattedDate()}
								className='flex-1 border border-zinc-300 rounded-md px-4 py-3 mt-2'
							/>
						</View>

						<View className='flex-row items-center gap-2'>
							<Button className='w-10 h-10' onPress={showTimerPicker}>
								<Button.Icon icon={Clock} />
							</Button>
							<TextInput
								value={formattedTime()}
								className='flex-1 border border-zinc-300 rounded-md px-4 py-3 mt-2'
							/>
						</View>
					</View>

					<Button>
						<Button.Title>Agendar</Button.Title>
					</Button>
				</View>

				{show && (
					<DateTimePicker
						testID='dateTimePicker'
						value={date}
						mode={mode as string | any}
						is24Hour={true}
						onChange={onChange}
						display='spinner'
					/>
				)}
			</ScrollView>
		</View>
	)
}
