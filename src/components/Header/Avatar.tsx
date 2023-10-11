import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import colors from 'tailwindcss/colors'


export const Avatar = () => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View className="bg-gray-100 p-2 rounded-full">
        <Ionicons name="person" size={18} color={colors.gray[600]} />
      </View>
    </TouchableOpacity>
  )
}
