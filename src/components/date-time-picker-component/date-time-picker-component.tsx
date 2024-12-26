import DateTimePicker, {
	type DateTimePickerEvent,
} from '@react-native-community/datetimepicker'

interface Props {
	value: Date
	mode: string
	onChange: (event: DateTimePickerEvent, selectedDate?: Date) => void
}

export function DateTimePickerComponent({
	value: date,
	mode,
	onChange,
}: Props) {
	return (
		<DateTimePicker
			testID='dateTimePicker'
			value={date}
			mode={mode as 'date'}
			is24Hour={true}
			display='default'
			onChange={onChange}
		/>
	)
}
