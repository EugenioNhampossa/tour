import {
  ScrollView,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
} from 'react-native'
import { Header } from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from 'tailwindcss/colors'
import { InputText } from '../components/Form'

export function Home({ navigation }) {
  return (
    <SafeAreaView>
      <ImageBackground
        className="h-[50vh] bg-cover "
        source={{
          uri: 'https://plus.unsplash.com/premium_photo-1681582960531-7b5de57fb276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
        }}
        resizeMode="cover"
      >
        <Header />
        <View className="flex-1 justify-center">
          <View className="flex-col gap-9 p-3 justify-center">
            <Text className="text-white font-bold text-xl">
              Descubra Moçambique, a pérola do Índico!
            </Text>
            <View>
              <InputText placeholder={'Procurar...'} />
            </View>
          </View>
        </View>
      </ImageBackground>
      <View className="bg-amber-400 h-2" />
      <ScrollView className="relative"></ScrollView>
    </SafeAreaView>
  )
}
