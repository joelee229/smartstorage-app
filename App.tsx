import React from 'react';
import { Roboto_400Regular, Roboto_500Medium, useFonts} from '@expo-google-fonts/roboto';
import { NavigationContainer } from '@react-navigation/native';
import { Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import { View, Text, StatusBar } from 'react-native';

import Loading from './src/components/Loading';
import AppProvider from './src/hooks/';
import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  });

  if(!fontsLoaded){
    // TODO: Component de loading
    return <Loading />
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#fdfdfd" />
      <AppProvider>
        <Routes />
      </AppProvider>
    </NavigationContainer>
  );
}


