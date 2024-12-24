import { useState } from "react";
import { Text, View } from "react-native";

import { Calendar, DateData, LocaleConfig } from 'react-native-calendars'
import colors from "tailwindcss/colors";

import { ptBR } from "../utils/locale-calendar-config";
LocaleConfig.locales['pt-br'] = ptBR
LocaleConfig.defaultLocale = 'pt-br'

export default function Schedule() {
  const [day, setDay] = useState<DateData>()

  return (
    <View className="p-10">
      <Calendar 
        style={{
          backgroundColor: 'transparent',
        }}

        headerStyle={{
          borderBottomWidth: 0.5,
          borderBottomColor: colors.zinc[300],
          paddingBottom: 10,
          marginBottom: 10
        }}

        theme={{
          calendarBackground: 'transparent',
          textMonthFontSize: 18,
          montthTextColor: colors.green[500],
          todayTextColor: colors.green[500],
          selectedDayBackgroundColor: colors.green[500],
          selectedDayTextColor: colors.zinc[100],
          arrowColor: colors.green[500],
          textDisabledColor: colors.zinc[400]
        }}
        
        minDate={new Date().toISOString()}

        hideExtraDays

        onDayPress={setDay}

        markedDates={ day && {
          [day.dateString] : { selected: true}
        }}

      />

      <Text className="text-zinc-400 mt-10">
        Dia selecionado: {' '}
         {day?.dateString}
      </Text>
    </View>
  )
}