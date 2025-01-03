import type { LucideProps } from 'lucide-react-native'
import type { ComponentType, ReactNode } from 'react'
import {
	TouchableOpacity,
	type TextProps,
	Text,
	ActivityIndicator,
	type TouchableOpacityProps,
} from 'react-native'

import colors from 'tailwindcss/colors'

interface IconProps {
	icon: ComponentType<LucideProps>
}

type ButtonProps = TouchableOpacityProps & {
	isLoading?: boolean
}

function Button({ children, isLoading = false, ...rest }: ButtonProps) {
	return (
		<TouchableOpacity
			className='bg-green-700 h-12 max-h-14 rounded-2xl flex-row items-center justify-center'
			disabled={isLoading}
			activeOpacity={0.9}
			{...rest}
		>
			{isLoading ? (
				<ActivityIndicator size='small' color={colors.zinc[100]} />
			) : (
				children
			)}
		</TouchableOpacity>
	)
}

function Title({ children, ...rest }: TextProps) {
	return (
		<Text className='text-lg font-subtitle text-zinc-50' {...rest}>
			{children}
		</Text>
	)
}

function Icon({ icon: Icon, ...rest }: IconProps) {
	return <Icon size={24} className='text-zinc-50' {...rest} />
}

Button.Title = Title
Button.Icon = Icon

export { Button }
