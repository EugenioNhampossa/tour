import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Rating } from 'react-native-ratings'

export const RichCard = () => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View className="flex-col mb-7">
        <View className="h-44">
          <Image
            className="flex-1"
            source={{
              uri: 'https://plus.unsplash.com/premium_photo-1671358446946-8bd43ba08a6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
            }}
            resizeMode="cover"
          />
        </View>
        <Text className="text-base font-medium pt-1">Praia de Goa</Text>
        <View>
          <Text className="max-h-9">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            beatae corrupti unde aperiam, vitae quisquam nam autem! Aliquam
            impedit veritatis alias vitae nisi repellat quas, architecto aut
            quam vel atque.
          </Text>
        </View>
        <View className="flex-row items-center gap-2">
          <Rating ratingCount={5} imageSize={16} readonly />
          <Text>3.5</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
