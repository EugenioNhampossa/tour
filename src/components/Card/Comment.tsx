import React from 'react'
import { View, Text } from 'react-native'

export const Comment = () => {
  return (
    <>
      <View className="mt-7 flex-row justify-between items-center mb-2">
        <Text className="text-base font-semibold">@username</Text>
        <Text>03/10/2023</Text>
      </View>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
        exercitationem mollitia ipsam, maxime blanditiis ut consequatur
        accusantium at, vel omnis quo dolorum, obcaecati harum eius aperiam ad.
        Magni, cumque quam!
      </Text>
    </>
  )
}
