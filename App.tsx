import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { Home } from './src/app/Home'
import { Search } from './src/app/Seach'
import { Info } from './src/app/Info'
import { Register } from './src/app/Register'
import { Login } from './src/app/Login'
import colors from 'tailwindcss/colors'

export default function App() {
  const Stack = createNativeStackNavigator()

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.white,
    },
  }

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Info" component={Info} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
