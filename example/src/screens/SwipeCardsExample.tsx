import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import { SwipeCards } from 'react-native-onem_library';

const height = Dimensions.get('window').height;

const CardSwiperExample = () => {
  return (
    <View style={styles.scrollContent}>
      <View style={styles.topContainer}>
        <SwipeCards />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.propContentText}>Prop Content</Text>
        <Text style={styles.propContentText}>Prop Content</Text>
        <Text style={styles.propContentText}>Prop Content</Text>
        <Text style={styles.propContentText}>Prop Content</Text>
        <Text style={styles.propContentText}>Prop Content</Text>
        <Text style={styles.propContentText}>Prop Content</Text>
      </View>
    </View>
  );
};

export default CardSwiperExample;

const styles = StyleSheet.create({
  topContainer: {
    height: height / 1.8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginBottom: 50,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  propContentText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 100,
    color: 'grey',
  },
  scrollContent: {
    flexGrow: 1,
  },
});
