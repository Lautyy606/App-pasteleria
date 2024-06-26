import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native'
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from "react";
import Navigator from './src/navigation/Navigator';
import { Provider } from 'react-redux';
import store from './src/store';

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Dancing': require('./assets/DancingScript-Bold.ttf'),
    'Josefin': require('./assets/JosefinSans-Regular.ttf'),
    'Montserrat': require('./assets/Montserrat-Regular.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);


  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Navigator/>
      </Provider>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: '#F9F9F9',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
})