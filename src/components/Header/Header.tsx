import React from 'react'
import { View, Text } from 'react-native'
import { Avatar } from './Avatar'

export const Header = () => {
  return (
    <View className="p-3 justify-between flex-row items-center">
      <Text className="font-bold text-2xl text-white">TOUR</Text>
      <Avatar />
    </View>
  )
}
