import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, StyleSheet } from 'react-native';
import BottomPanel from './home_components/BottomPanel';
import Items from './home_components/Items';

function HomeScreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  return (
    <>
      <SafeAreaView
        style={{
          flexDirection: 'column',
          backgroundColor: '#F8F0FB',
          flex: 1,
          justifyContent: 'space-between',
        }}
      >
        <View style={styles.container}>
          <Items />
          <BottomPanel />
        </View>
      </SafeAreaView>
    </>
  );
}

export default HomeScreen;
