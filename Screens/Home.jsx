import { View, Text, TouchableOpacity, Image, FlatList, SafeAreaView } from 'react-native'
import React, { useRef, useState, useMemo } from 'react'
import ListItem from '../Components/ListItem'
import {SAMPLE_DATA} from '../data/data'
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import Chart from '../Components/Chart';

const Home = () => {

  const [selectedCoin, setSelectedCoin] = useState(null)

  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['50%'], []);


  const openModal = (item) => {
    setSelectedCoin(item)
    bottomSheetModalRef.current.present()
  }

  return (
    <BottomSheetModalProvider>
      <SafeAreaView className="flex-1 bg-gray-200">
        <View className="mx-4">
          <Text className="text-2xl font-semibold">Markets</Text>
          
          {/* DIVIDER */}
          <View className="w-[100%] border-1 self-center border-gray-400 border-b my-3" />

          <FlatList 
            data={SAMPLE_DATA}
            renderItem={({ item }) => <ListItem item={item} onPress={()=> openModal(item)} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 160 }}
          />  

        </View>

        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
        
        >
          <Chart selectedCoin={selectedCoin} setSelectedCoin={setSelectedCoin} />
        </BottomSheetModal>

      </SafeAreaView>
    </BottomSheetModalProvider>
  )
}

export default Home