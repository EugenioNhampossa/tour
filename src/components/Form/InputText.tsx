import React from 'react'
import { TextInput, View } from 'react-native'
import colors from 'tailwindcss/colors'
import Ionicons from '@expo/vector-icons/Ionicons'

export const InputText = ({ placeholder }) => {
  return (
    <View className="flex-auto flex-row border-transparent items-center rounded-lg bg-white border-2 px-2  focus:border-amber-400">
      <Ionicons name="search" size={22} />
      <TextInput
        placeholder={placeholder}
        cursorColor={colors.gray[500]}
        className="flex-auto px-3 py-1"
      />
    </View>
  )
}
