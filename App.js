import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './Navigation/AppNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-gesture-handler'

export default function App() {
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <AppNavigation />
    </GestureHandlerRootView>
  );
}

