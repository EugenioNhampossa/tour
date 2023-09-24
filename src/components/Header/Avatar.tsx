import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export const Avatar = () => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View className="bg-white p-5 rounded-full" />
    </TouchableOpacity>
  )
}
