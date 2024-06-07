# react-native-onem_library

A library providing useful React Native components, including an animated dropdown.

## Installation

```sh
npm install react-native-onem_library
```

## Usage

# Animated Dropdown
Here's a simple example of how to use the AnimatedDropdown component in a React Native app:
```js
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { AnimatedDropdown } from 'react-native-onem_library';

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

const handleSelect = (selectedValue: string) => {
  console.log('Selected value:', selectedValue);
};

export default function App() {
  return (
    <View style={styles.container}>
      <AnimatedDropdown options={options} onSelect={handleSelect} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

```

# Animated Dropdown Props

| Prop  | Type| Description | Default
| ------------- | ------------- | ------------- | ---------| 
| options  | DropdownOption[] | An array of options for the dropdown. | Required |
| onSelect  | (value: string) => void | Callback function invoked when an option is selected. | Required |
| boxHeight  | number | Height of the dropdown box. | 50 |
| boxWidth  | number | Width of the dropdown box. | 200 |
| iconColor  | string | Color of the dropdown arrow icon. | '#666' |
| placeholder  | string  | Placeholder text when no option is selected. | 'Select an option' |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

