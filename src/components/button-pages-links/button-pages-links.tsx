import {  Text, TouchableOpacity, type TouchableOpacityProps } from "react-native"

import { clsx } from 'clsx'

type Props = TouchableOpacityProps & {
  text: string
}

export function ButtonPagesLinks({ text, ...rest }: Props) {
  return (
    <TouchableOpacity className={clsx(
      'bg-green-700 px-4 justify-center rounded-md h-10',
    )}
      {...rest}>
      <Text className="text-zinc-100 font-bold">{text}</Text>
    </TouchableOpacity>
  )
}