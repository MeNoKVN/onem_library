import { StyleSheet, View } from 'react-native';
import React from 'react';
import Card from './Card';

const data = [
  { backgroundColor: 'red' },
  { backgroundColor: 'blue' },
  { backgroundColor: 'green' },
  { backgroundColor: 'yellow' },
  { backgroundColor: 'purple' },
];

const SwipeCards = () => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <Card item={item} index={index} key={index} />
      ))}
    </View>
  );
};

export default SwipeCards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
