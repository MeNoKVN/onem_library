import { StyleSheet, View } from 'react-native';
import React from 'react';
import { AnimatedDropdown } from 'react-native-onem_library';

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

const handleSelect = (selectedValue: string) => {
  console.log('Selected value:', selectedValue);
};

const AnimatedDropdownExample = () => {
  return (
    <View style={styles.container}>
      <AnimatedDropdown options={options} onSelect={handleSelect} />
    </View>
  );
};

export default AnimatedDropdownExample;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
    }
});
