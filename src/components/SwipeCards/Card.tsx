import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';

const [width, height] = [
  Dimensions.get('window').width,
  Dimensions.get('window').height,
];

type Props = {
  item: any;
  index: number;
};

const Card = ({ item, index }: Props) => {
  const scaleFactor = 0.055;
  const cardWidth = width - 60 - index * (width * scaleFactor);
  const cardHeight = height / 2.1 - index * (height * scaleFactor);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: item.backgroundColor,
          width: cardWidth,
          height: cardHeight,
          transform: [
            { translateX: index * (width * scaleFactor) },
            { translateY: index * 1 },
          ],
          zIndex: -index,
        },
      ]}
    >
      <Text>Card</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'yellow',
    borderRadius: 20,
  },
});
