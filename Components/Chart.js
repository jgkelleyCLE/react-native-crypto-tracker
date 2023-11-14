import { View, Text, Image, Dimensions } from 'react-native'
import React, { useRef } from 'react'
import { LineChart } from "react-native-gifted-charts"

export const {width: SIZE} = Dimensions.get('window');

const Chart = ({ selectedCoin, setSelectedCoin }) => {

  const dataPoints = selectedCoin?.sparkline_in_7d.price

  const xPoints = []
  const yPoints = []

  const getXDataPoints = () => {
    dataPoints.forEach(element => {
      xPoints.push(element.x)
      
    });
  }

  const getYDataPoints = () => {
    dataPoints.forEach(element => {
      yPoints.push({value: element.y})
    })
  }
  
  getXDataPoints()
  getYDataPoints()
  console.log("X POINTS: ", xPoints)
  console.log("Y POINTS: ", yPoints)

  

  const data = {
    xAxis: xPoints,
    yAxis: yPoints
  }


  const graphRef = useRef(null);

  return (
    
    <View className="flex-1">
      <View className="mx-4">

        <View >

          {/* top flex row */}
          <View className="flex-row items-center justify-between">

          <View className="flex-row items-center mb-1">
            <Image className="w-7 h-7 mr-2" source={{ uri: selectedCoin?.image }} />
              <Text className="text-md text-gray-400">{selectedCoin?.name} </Text>
              <Text className="text-md text-gray-400 uppercase">({selectedCoin?.symbol})</Text>
          </View>
            <Text className="text-gray-400 text-md">7d</Text>

          </View>

          {/* bottom flex row */}
          <View className="flex-row items-center justify-between mb-8">
            <Text className="text-2xl font-bold">${selectedCoin?.current_price.toLocaleString('en-US')}</Text>
            <Text className={`text-lg ${selectedCoin?.price_change_percentage_24h > 0 ? 'text-green-400': 'text-red-500'}`}>{selectedCoin?.price_change_percentage_24h.toFixed(2)}%</Text>
          </View>
          
        </View>


        

        <View className="">


      <LineChart
      initialSpacing={0}
      data={yPoints}
      spacing={1.9}
      hideDataPoints
      thickness={1}
      curved
      endSpacing={20}
      isAnimated
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
    </View>
    
  )
}

export default Chart