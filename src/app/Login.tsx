import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export function Login({ navigation }) {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text className="text-xl p-4 bg-purple-500 text-white font-semibold rounded-md">
        Login
      </Text>
    </SafeAreaView>
  )
}
