import { View, Text, Image } from 'react-native'
import React, { useRef } from 'react'
import { LineChart } from "react-native-gifted-charts"

const NewChart = ({ selectedCoin }) => {

    const dataPoints = selectedCoin?.sparkline_in_7d.price

    const yPoints = []

    const getYDataPoints = () => {
        dataPoints.forEach(element => {
            yPoints.push({value: element})
        })
    }

    getYDataPoints()

  return (
    <View className="flex-1">
        <View className="mx-4">

            {/* TOP ROW */}
            <View className="flex-row items-center justify-between mb-1">
                <View className="flex-row items-center">
                <Image className="w-7 h-7 mr-2" source={{ uri: selectedCoin.image }} />
                <Text className="text-md text-gray-400">{selectedCoin.name} </Text>
                <Text className="text-md text-gray-400 uppercase">({selectedCoin.symbol})</Text>
                </View>
                <Text className="text-md text-gray-400">7d</Text>

            </View>

            {/* BOTTOM ROW */}
            <View className="flex-row items-center justify-between">
                <Text className="text-2xl font-semibold">${selectedCoin.current_price.toLocaleString('en-US')}</Text>
                <Text className={`text-md ${selectedCoin.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}`}>{selectedCoin.price_change_percentage_24h.toFixed(2)}%</Text>
            </View>

        </View>

        <View className="mt-8">
            <LineChart 
                initialSpacing={0}
                data={yPoints}
                spacing={1.9}
                hideDataPoints
                thickness={1}
                curved
                endSpacing={20}
                hideRules
                hideYAxisText
                yAxisColor="#0BA5A4"
                adjustToWidth={true}
                verticalLinesColor="rgba(14,164,164,0.5)"
                xAxisColor="#0BA5A4"
                color="#033b3b"
            
            />
        </View>

    </View>
  )
}

export default NewChart