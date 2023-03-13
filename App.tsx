
import * as eva from '@eva-design/eva'
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Header from './components/Header';
import Equipment from './components/Equipment';
import EquipmentsList from './components/EquipmentsList';


function App(): JSX.Element {

  return (
    <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme = {eva.dark}>
      <SafeAreaView style= {{backgroundColor: "#1c1c1c", height: "100%"}} >
        <StatusBar
          barStyle= 'dark-content'
          backgroundColor='white'
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
            <Header/>
            <EquipmentsList/>
        </ScrollView>
    </SafeAreaView>
    </ApplicationProvider>
    </>
  );
}


export default App;
