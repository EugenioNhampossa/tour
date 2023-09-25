import {
  ScrollView,
  Text,
  View,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { Header } from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import { InputText } from '../components/Form'
import { BasicCard } from '../components/Card/BasicCard'
import { RichCard } from '../components/Card/RichCard'

export function Home({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground
          className="h-[35vh] bg-cover "
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
        <View className="px-3">
          <View className="flex-row justify-between items-center my-4">
            <Text className=" text-lg font-semibold">Mais Procurados</Text>
            <TouchableOpacity>
              <Text className="text-gray-500 text-base">Ver mais</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            className="mb-3"
            horizontal
            data={['0', '1', '2', '3']}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => <BasicCard key={index} />}
          />
          <View className="flex-row justify-between items-center my-4">
            <Text className=" text-lg font-semibold">Recomendados</Text>
            <TouchableOpacity>
              <Text className="text-gray-500 text-base">Ver mais</Text>
            </TouchableOpacity>
          </View>
          <View className="mb-3">
            {[1, 2, 3, 4].map((item, index) => (
              <RichCard key={index} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
