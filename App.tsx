import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { Home } from './src/app/Home'
import { Search } from './src/app/Seach'
import { Info } from './src/app/Info'
import { Register } from './src/app/Register'
import { Login } from './src/app/Login'

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Info" component={Info} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
