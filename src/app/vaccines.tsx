import { ScrollView, Text, TextInput, View } from 'react-native'
import { Header } from '../components/header/header'
import { Button } from '../components/button/button'
import { Calendar } from 'lucide-react-native'

import type { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import { useState } from 'react'
import { DateTimePickerComponent } from '../components/date-time-picker-component/date-time-picker-component'

export default function Vaccines() {
	const [dateApplication, setDateApplication] = useState(new Date())
	const [dateExpiration, setDateExpiration] = useState(new Date())

	const [modeApplication, setModeApplication] = useState('date')
	const [modeExpiration, setModeExpiration] = useState('date')

	const [showApplication, setShowApplication] = useState(false)
	const [showExpiration, setShowExpiration] = useState(false)

	const onChangeApplication = (
		event: DateTimePickerEvent,
		selectedDate?: Date
	) => {
		const currentDate = selectedDate
		setShowApplication(false)
		setDateApplication(currentDate!)
	}

	const onChangeExpiration = (
		event: DateTimePickerEvent,
		selectedDate?: Date
	) => {
		const currentDate = selectedDate
		setShowExpiration(false)
		setDateExpiration(currentDate!)
	}

	const showModeApplication = (currentMode: string) => {
		setShowApplication(true)
		setModeApplication(currentMode)
	}

	const showModeExpiration = (currentMode: string) => {
		setShowExpiration(true)
		setModeExpiration(currentMode)
	}

	const showDateApplication = () => {
		showModeApplication('date')
	}

	const showDateExpiration = () => {
		showModeExpiration('date')
	}

	const formattedDateApplication = () => {
		const day = dateApplication.getDate()
		const month = dateApplication.getMonth() + 1
		const year = dateApplication.getFullYear()

		return `${day}/${month}/${year}`
	}

	const formattedDateExpiration = () => {
		const day = dateExpiration.getDate()
		const month = dateExpiration.getMonth() + 1
		const year = dateExpiration.getFullYear()

		return `${day}/${month}/${year}`
	}

	return (
		<View className='flex-1 p-10'>
			<Header />

			<Text className='py-10 text-2xl font-title text-zinc-700'>
				Registro de vacinas
			</Text>

			<ScrollView showsVerticalScrollIndicator={false}>
				<View className='space-y-10'>
					<View>
						<Text className='font-subtitle text-zinc-700'>Nome da vacina</Text>
						<TextInput className='border border-zinc-300 rounded-md px-4 py-3 mt-2' />
					</View>

					<View>
						<Text className='font-subtitle text-zinc-700'>Lote</Text>
						<TextInput className='border border-zinc-300 rounded-md px-4 py-3 mt-2' />
					</View>

					<View>
						<Text className='font-subtitle text-zinc-700'>
							Contato do veterinário
						</Text>
						<TextInput className='border border-zinc-300 rounded-md px-4 py-3 mt-2' />
					</View>

					<View className='space-y-2'>
						<Text className='font-subtitle text-zinc-700'>
							Data da aplicação
						</Text>
						<View className='flex-row items-center gap-2'>
							<Button onPress={showDateApplication} className='w-10 h-10'>
								<Button.Icon icon={Calendar} />
							</Button>
							<TextInput
								value={formattedDateApplication()}
								className='flex-1 border border-zinc-300 rounded-md px-4 py-3 mt-2'
							/>
						</View>
					</View>

					<View className='space-y-2'>
						<Text className='font-subtitle text-zinc-700'>
							Data de expiração
						</Text>
						<View className='flex-row items-center gap-2'>
							<Button onPress={showDateExpiration} className='w-10 h-10'>
								<Button.Icon icon={Calendar} />
							</Button>
							<TextInput
								value={formattedDateExpiration()}
								className='flex-1 border border-zinc-300 rounded-md px-4 py-3 mt-2'
							/>
						</View>
					</View>

					<Button>
						<Button.Title>Registrar</Button.Title>
					</Button>
				</View>

				{showApplication && (
					<DateTimePickerComponent
						value={dateApplication}
						mode={modeApplication}
						onChange={onChangeApplication}
					/>
				)}

				{showExpiration && (
					<DateTimePickerComponent
						value={dateExpiration}
						mode={modeExpiration}
						onChange={onChangeExpiration}
					/>
				)}
			</ScrollView>
		</View>
	)
}
