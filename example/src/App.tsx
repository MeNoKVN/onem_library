import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { AnimatedDropdown } from 'react-native-onem_library';

export default function App() {
  return (
    <View style={styles.container}>
      <AnimatedDropdown />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
