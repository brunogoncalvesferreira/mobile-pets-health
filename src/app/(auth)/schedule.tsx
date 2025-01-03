import { useState } from 'react'
import { Text, TextInput, View, ScrollView } from 'react-native'

import { Button } from '@/components/button/button'

import type { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import { Header } from '@/components/header/header'
import { ArrowLeft, Calendar, Clock } from 'lucide-react-native'
import { DateTimePickerComponent } from '@/components/date-time-picker-component/date-time-picker-component'
import { router } from 'expo-router'
import { set, z } from 'zod'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createAppointments } from '@/http/create-appointments'
import { useAuth } from '@/contexts/auth-context'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getPets } from '@/http/get-pets'

const ScheduleFormSchema = z.object({
	reason: z.string(),
	nameVet: z.string(),
	contactVet: z.string(),
})

type ScheduleForm = z.infer<typeof ScheduleFormSchema>

export default function Schedule() {
	const [date, setDate] = useState(new Date())
	const [mode, setMode] = useState('date')
	const [show, setShow] = useState(false)

	const [isLoading, setIsLoading] = useState(false)

	const { tutor } = useAuth()

	const { data: getPetsFn } = useQuery({
		queryKey: ['pets'],
		queryFn: () => getPets(tutor.id),
	})

	const petsId = getPetsFn?.map((item) => item.id).toString()

	const { control, handleSubmit } = useForm<ScheduleForm>({
		resolver: zodResolver(ScheduleFormSchema),
	})

	const { mutateAsync: createAppointmentsFn } = useMutation({
		mutationFn: createAppointments,
	})

	async function handleSchedule(data: ScheduleForm) {
		
		try {
			setIsLoading(true)

			await createAppointmentsFn({
				reason: data.reason,
				contactVet: data.contactVet,
				nameVet: data.nameVet,
				date,
				petsId: petsId!,
			})

			setIsLoading(false)
			router.navigate('/home')

		} catch (error) {
			console.log(error)
			setIsLoading(false)
		}
	}

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

			<ScrollView showsVerticalScrollIndicator={false} className='mt-10'>
				<View className='flex-row items-center gap-10 pb-10'>
					<Button onPress={() => router.back()} className='w-10 h-10'>
						<Button.Icon icon={ArrowLeft} />
					</Button>

					<Text className='font-title text-xl text-zinc-700'>
						Agendamento de consulta
					</Text>
				</View>

				<View className='space-y-10'>
					<View>
						<Text className='font-subtitle text-zinc-700'>
							Motivo da consulta
						</Text>
						<Controller
						 	control={control}
							name='reason'
							render={({ field: { onChange, onBlur, value } }) => (
								<TextInput 
									className='border border-zinc-300 rounded-md px-4 py-3 mt-2' 
									onBlur={onBlur}
									onChangeText={onChange}
									value={value}
								/>
							)}
						/>
					</View>

					<View>
						<Text className='font-subtitle text-zinc-700'>
							Nome do veterinário
						</Text>
						<Controller
						 	control={control}
							name='nameVet'
							render={({ field: { onChange, onBlur, value } }) => (
								<TextInput 
									className='border border-zinc-300 rounded-md px-4 py-3 mt-2' 
									onBlur={onBlur}
									onChangeText={onChange}
									value={value}
								/>
							)}
						/>
					</View>

					<View>
						<Text className='font-subtitle text-zinc-700'>
							Contato do veterinário
						</Text>
						<Controller
						 	control={control}
							name='contactVet'	
							render={({ field: { onChange, onBlur, value } }) => (
								<TextInput 
									className='border border-zinc-300 rounded-md px-4 py-3 mt-2' 
									onBlur={onBlur}
									onChangeText={onChange}
									value={value}
								/>
							)}
						/>
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

					<Button 
						onPress={handleSubmit(handleSchedule)} 
						disabled={isLoading} 
						isLoading={isLoading}
					>
						<Button.Title>Agendar</Button.Title>
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
