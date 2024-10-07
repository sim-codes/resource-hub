import React, { useState } from 'react';
import { View, Text, Modal, FlatList, TouchableOpacity } from 'react-native';
import CustomInput from './input';

interface Option {
  label: string;
  value: string;
}

interface DropdownInputProps {
  label?: string;
  placeholder?: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const DropdownInput: React.FC<DropdownInputProps> = ({
  label,
  placeholder,
  options,
  value,
  onChange,
  error,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const selectedOption = options.find(option => option.value === value);

  const handlePress = () => {
    setModalVisible(true);
  };

  const handleSelect = (option: Option) => {
    onChange(option.value);
    setModalVisible(false);
  };

  return (
    <View>
      <CustomInput
        label={label}
        value={selectedOption ? selectedOption.label : ''}
        onChangeText={() => {}} // This input is read-only
        placeholder={placeholder}
        error={error}
        onPressIn={handlePress}
        pointerEvents="none"
      />
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-end bg-black bg-opacity-50">
          <View className="bg-white rounded-t-lg p-4">
            <Text className="text-lg font-bold mb-2">Select an option</Text>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className="py-3 border-b border-gray-200"
                  onPress={() => handleSelect(item)}
                >
                  <Text>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              className="mt-4 bg-gray-200 p-3 rounded-md"
              onPress={() => setModalVisible(false)}
            >
              <Text className="text-center font-bold">Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DropdownInput;