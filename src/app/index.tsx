import { View } from "react-native"
import { Features } from "../components/features/features"
import { Header } from "../components/header/header"
import { Button } from "../components/button/button"
import { router } from 'expo-router'

export default function Index() {
  return (
    <View className="flex-1 p-10">
      <Header/>

      <Features/>

      <View className="space-y-4">
        <Button onPress={() => router.navigate('/login')}>
          <Button.Title>Login</Button.Title>
        </Button>

        <Button onPress={() => router.navigate('/register')}>
          <Button.Title>Registrar</Button.Title>
        </Button>
      </View>

    </View>
  )
}
