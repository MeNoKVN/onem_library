import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonNavigator}
        onPress={() => navigation.navigate('AnimatedDropdown')}
      >
        <Text style={styles.buttonText}>Animated Dropdown Example</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonNavigator}
        onPress={() => navigation.navigate('SwipeCards')}
      >
        <Text style={styles.buttonText}>Swipe Cards Example</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonNavigator: {
    backgroundColor: 'white',
    width: '95%',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: '#292C2F',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
