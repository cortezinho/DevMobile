import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./componentes/home"
import Settings from "./componentes/settings"


const Stack = createNativeStackNavigator()

export default function App() {
  return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name = "Home" component={Home} />
      <Stack.Screen name = "Settings" component={Settings} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}