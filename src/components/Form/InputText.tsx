import React from 'react'
import { TextInput, View } from 'react-native'
import colors from 'tailwindcss/colors'

export const InputText = ({ placeholder }) => {
  return (
    <View className="flex-auto flex-row border-transparent items-center rounded-lg bg-white px-2 focus:border-2 focus:border-amber-400">
      <TextInput
        placeholder={placeholder}
        cursorColor={colors.gray[500]}
        className="flex-auto px-3 py-1"
      />
    </View>
  )
}
