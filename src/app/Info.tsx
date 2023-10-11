import {
  FlatList,
  ScrollView,
  Text,
  Image,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '../components/Header'
import { Rating } from 'react-native-ratings'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import colors from 'tailwindcss/colors'
import { Comment } from '../components/Card/Comment'

export function Info({ navigation }) {
  const images = [
    'https://plus.unsplash.com/premium_photo-1671358446946-8bd43ba08a6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
    'https://plus.unsplash.com/premium_photo-1666497934028-607274a840a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW96YW1iaXF1ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1625819397064-9c694a43dbba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  ]
  return (
    <SafeAreaView>
      <Header navigation={navigation} />
      <ScrollView className="px-3 mb-20">
        <FlatList
          className="mb-3"
          horizontal
          data={images}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <Image className="w-[70vw] h-56 mr-3" source={{ uri: item }} />
          )}
        />
        <Text className="font-semibold text-lg">Location Title</Text>
        <View className="flex-row items-center gap-2 mt-1">
          <Rating ratingCount={5} imageSize={18} readonly />
          <Text>3.5</Text>
        </View>
        <View>
          <Text className="text-lg font-semibold mt-7">Descrição</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            ipsa, provident id, numquam nulla earum reiciendis nihil vel quidem,
            voluptatibus facilis ullam dignissimos deleniti consectetur
            excepturi officia quam ex laborum?
          </Text>
        </View>
        <View className="">
          <Text className="text-lg font-semibold mt-7 mb-1">Localização</Text>
          <MapView
            className="w-full h-56"
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
          <Text className="text-base mt-1">
            Rua tal nr.9473 Matola, Machava
          </Text>
          <View className="flex-row justify-end mt-4">
            <TouchableOpacity
              activeOpacity={0.6}
              className="p-3 bg-amber-500 rounded-md"
            >
              <Text className="text-white text-base font-semibold">
                Ver no Maps
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="">
          <Text className="text-lg font-semibold mt-6 mb-1">Comentários</Text>
          <View className="border-gray-400  rounded-md bg-white border-2 px-2  focus:border-amber-400">
            <TextInput
              multiline
              numberOfLines={3}
              placeholder={'Fale nos sobre este lugar...'}
              cursorColor={colors.gray[500]}
              textAlignVertical="top"
              className="px-3 py-2"
            />
          </View>
          <View className="flex-row justify-end mt-4">
            <TouchableOpacity
              activeOpacity={0.6}
              className="p-3 bg-gray-500 rounded-md"
            >
              <Text className="text-white text-base font-semibold">
                Submeter
              </Text>
            </TouchableOpacity>
          </View>
          <Comment />
          <Comment />
          <Comment />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
