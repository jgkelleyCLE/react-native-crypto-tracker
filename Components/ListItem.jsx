import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {SAMPLE_DATA} from '../data/data'

const ListItem = ({ item, onPress }) => {

  return (
            <TouchableOpacity className="flex-row items-center justify-between my-3" onPress={onPress}>
                {/* LEFT SIDE */}
              <View className="flex-row items-center">
                <Image className="w-12 h-12 mr-2" source={{ uri: item.image }} />
                <View className="items-start">
                    <Text className="text-xl">{item.name}</Text>
                    <Text className="text-md text-gray-400 uppercase">{item.symbol}</Text>
                </View>
              </View>

              {/* RIGHT SIDE */}
              <View className="items-end justify-center">
                <Text className="text-xl">${item.current_price.toLocaleString('en-US')}</Text>
                <Text className={`text-md ${item.price_change_percentage_24h > 0 ? 'text-green-400' : 'text-red-500'}`}>{item.price_change_percentage_24h.toFixed(2)}%</Text>
              </View>
            </TouchableOpacity>
  )
}

export default ListItem