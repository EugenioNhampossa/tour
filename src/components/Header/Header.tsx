import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Avatar } from './Avatar'
import Ionicons from '@expo/vector-icons/Ionicons'

export const Header = ({ navigation }) => {
  return (
    <View className="p-3 justify-between flex-row items-center">
      <View className="flex-row items-center gap-1">
        <TouchableOpacity
          activeOpacity={0.3}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={30} />
        </TouchableOpacity>
        <Text className="font-bold text-2xl">TOUR</Text>
      </View>
      <Avatar />
    </View>
  )
}
