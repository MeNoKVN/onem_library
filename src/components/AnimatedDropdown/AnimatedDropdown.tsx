import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import IIcon from 'react-native-vector-icons/Ionicons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  FadeIn,
  FadeInLeft,
} from 'react-native-reanimated';

interface DropdownOption {
  label: string;
  value: string;
}

interface AnimatedDropdownProps {
  options: DropdownOption[];
  onSelect: (selectedValue: string) => void;
  boxHeight?: number;
  boxWidth?: number;
  iconColor?: string;
  placeholder?: string;
}

const AnimatedDropdown: React.FC<AnimatedDropdownProps> = ({
  options,
  onSelect,
  boxHeight = 50,
  boxWidth = 200,
  iconColor = '#666',
  placeholder = 'Select an option',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    null
  );
  const iconRotation = useSharedValue(0);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    iconRotation.value = withTiming(isOpen ? 0 : 180, { duration: 200 });
  };

  const handleOptionSelect = (option: DropdownOption) => {
    setSelectedOption(option);
    onSelect(option.value);
    setIsOpen(false);
    iconRotation.value = withTiming(0, { duration: 300 });
  };

  const iconStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${iconRotation.value}deg` }],
    };
  });

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={toggleDropdown}
        style={[styles.selectBox, { height: boxHeight, width: boxWidth }]}
      >
        <Text style={styles.selectedOptionText}>
          {selectedOption ? selectedOption.label : placeholder}
        </Text>
        <Animated.View style={iconStyle}>
          <IIcon name="chevron-down" size={20} color={iconColor} />
        </Animated.View>
      </TouchableOpacity>
      {isOpen && (
        <Animated.View
          style={[styles.dropdownContainer, { width: boxWidth }]}
          entering={FadeIn}
        >
          {options.map((option, index) => (
            <Animated.View
              entering={FadeInLeft.duration(300)
                .springify()
                .damping(18)
                .stiffness(200)}
              key={option.value}
            >
              <TouchableOpacity
                key={option.value}
                style={[
                  styles.optionItem,
                  index !== options.length - 1 && styles.optionItemSeparator,
                ]}
                onPress={() => handleOptionSelect(option)}
              >
                <Text style={styles.optionText}>{option.label}</Text>
              </TouchableOpacity>
            </Animated.View>
          ))}
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  selectBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
  },
  selectedOptionText: {
    fontSize: 16,
    color: '#333',
  },
  dropdownContainer: {
    position: 'absolute',
    top: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 4,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  optionItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  optionItemSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
});

export default AnimatedDropdown;
