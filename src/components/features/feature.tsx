import { Text, View } from "react-native"

import { ComponentType } from "react"

import { LucideProps } from 'lucide-react-native'
import colors from "tailwindcss/colors"


interface Props {
  title: string
  description: string
  icon: ComponentType<LucideProps>
}


export function Feature({ title, description, icon: Icon }: Props) {
  return (
    <View className="flex-row w-full gap-4 pr-10 mt-2">
      {Icon && <Icon size={32} className="text-red-700" />}
      
      <View className="space-y-1">
        <Text className="font-title text-xl text-zinc-900">{title}</Text>
        <Text className="text-zinc-500 text-sm">{description}</Text>
      </View>
    </View>
  )
}