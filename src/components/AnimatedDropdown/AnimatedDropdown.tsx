import React, { useState, useRef } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Platform,
} from 'react-native';
import IIcon from 'react-native-vector-icons/Ionicons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
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
  style?: any;
}

const AnimatedDropdown: React.FC<AnimatedDropdownProps> = ({
  options,
  onSelect,
  boxHeight = 50,
  boxWidth = 200,
  iconColor = '#666',
  placeholder = 'Select an option',
  style,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    null
  );
  const iconRotation = useSharedValue(0);
  const selectBoxRef = useRef<TouchableOpacity>(null);
  const [dropdownPosition, setDropdownPosition] = useState({
    top: -69,
    left: 0,
  });

  const toggleDropdown = () => {
    if (!isOpen) {
      calculateDropdownPosition();
    }
    setIsOpen(!isOpen);
    iconRotation.value = withTiming(isOpen ? 0 : 180, { duration: 300 });
  };

  const calculateDropdownPosition = () => {
    selectBoxRef.current?.measure((x, y, width, height, pageX, pageY) => {
      // Adjusted to measure based on the screen
      //console.log(pageY, Platform.OS);

      setDropdownPosition({
        top:
          pageY +
          height +
          2 -
          (Platform.OS === 'android' ? Number(boxHeight) / 2 : 0),
        left: pageX,
      });
      console.log();
    });
  };

  const handleOptionSelect = (option: DropdownOption) => {
    setSelectedOption(option);
    onSelect(option.value);
    setIsOpen(false);
    iconRotation.value = withTiming(0, { duration: 300 });
  };

  const handleBackdropPress = () => {
    setIsOpen(false);
    iconRotation.value = withTiming(0, { duration: 300 });
  };

  const iconStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${iconRotation.value}deg` }],
    };
  });

  const renderOptions = () => {
    return options.map((option, index) => (
      <Animated.View
        entering={FadeInLeft.duration(300)
          .springify()
          .damping(18)
          .stiffness(200)}
        key={option.value}
      >
        <TouchableOpacity
          style={[
            styles.optionItem,
            index !== options.length - 1 && styles.optionItemSeparator,
          ]}
          onPress={() => handleOptionSelect(option)}
        >
          <Text style={styles.optionText}>{option.label}</Text>
        </TouchableOpacity>
      </Animated.View>
    ));
  };

  const renderDropdownModal = () => {
    return (
      <Modal visible={isOpen} transparent animationType="none">
        <View style={StyleSheet.absoluteFill}>
          <TouchableOpacity
            style={styles.modalBackground}
            onPress={handleBackdropPress}
          />
          {dropdownPosition.top !== -69 && (
            <View
              style={[
                styles.dropdownContainer,
                {
                  top: dropdownPosition.top,
                  left: dropdownPosition.left,
                  width: boxWidth,
                },
              ]}
            >
              {renderOptions()}
            </View>
          )}
        </View>
      </Modal>
    );
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        ref={selectBoxRef}
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
      {renderDropdownModal()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
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
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  dropdownContainer: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
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
