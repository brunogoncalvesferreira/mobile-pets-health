import type { LucideProps } from "lucide-react-native";
import type { ComponentType, ReactNode } from "react";
import { TouchableOpacity, TextProps, Text, ActivityIndicator, type TouchableOpacityProps } from "react-native";
import colors from "tailwindcss/colors";

interface IconProps {
  icon: ComponentType<LucideProps>
}

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean
}

function Button({ children, isLoading = false, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      className="bg-green-700 h-14 max-h-14 rounded-2xl flex-row items-center justify-center"
      disabled={isLoading}
      activeOpacity={0.7}
      {...rest}
    >
      { isLoading 
        ? <ActivityIndicator size="small" color={colors.zinc[100]}/>  
        : children
      }
    </TouchableOpacity>
  )
}

function Title({ children }: TextProps) {
  return (
    <Text className="text-lg font-subtitle text-zinc-50">
      {children}
    </Text>
  )
}

function Icon({ icon: Icon, ...rest }: IconProps) {
  return (
    <Icon size={24} className="text-zinc-50" {...rest}/>
  )
}

Button.Title = Title
Button.Icon = Icon

export { Button }