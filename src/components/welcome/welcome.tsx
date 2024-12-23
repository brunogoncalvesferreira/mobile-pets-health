import { Text, View } from "react-native";

export function Welcome() {
  return (
    <View className="p-10 h-60">
      <Text className="text-2xl font-title text-zinc-700">Bem vindo!</Text>
      <Text className="text-sm text-zinc-600">Bruno Gonçalves Ferreira</Text>
    </View>
  )
}