import { Tabs } from "expo-router";
import { Home, UserCog } from "lucide-react-native";

import colors from "tailwindcss/colors";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: {
        height: 72,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: colors.green[700]
      }
    }}>

      <Tabs.Screen
        name='home'
        options={{
          tabBarActiveTintColor: colors.zinc[100],
          title: 'Home',
          tabBarIcon: ({ focused }) => {
            return (
              <Home 
                size={32} 
                color={focused ? colors.zinc[200] : colors.zinc[400]} 
              />
            )
          }
        }}
      />

      <Tabs.Screen
        name='profile'
        options={{
          tabBarActiveTintColor: colors.zinc[100],
          title: 'profile',
          tabBarIcon: ({ focused }) => {
            return (
              <UserCog 
                size={32} 
                color={focused ? colors.zinc[200] : colors.zinc[400]} 
              />
            )
          }
        }}
      />
    </Tabs>
  )
}