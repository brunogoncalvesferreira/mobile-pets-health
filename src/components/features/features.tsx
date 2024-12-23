import { Text, View } from "react-native";
import { Feature } from "./feature";

import { Calendar, Syringe, ClipboardPlus} from 'lucide-react-native'

export function Features() {
  return (
    <View className="flex-1 pt-10">
      <Text className="text-zinc-700 font-base">Funcionalidades do app:</Text>

        <Feature
          icon={Calendar}
          title="Agendamentos"
          description="Você poderá agendar consultas para o seu pet."
        />

        <Feature
          icon={Syringe}
          title="Registro de vacinas"
          description="Registrar vacinas para um controle muito mais eficiente."
        />

        <Feature
          icon={ClipboardPlus}
          title="Histórico veterinário"
          description="Registro do histórico veterinário do seu pet, como exames e etc."
        />
    </View>
  )
}