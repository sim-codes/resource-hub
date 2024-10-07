import React from 'react';
import { View, TextInput, Text, TextInputProps } from 'react-native';

interface CustomInputProps extends Omit<TextInputProps, 'onChangeText'> {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ 
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType = 'default',
  autoCapitalize = 'none',
  error,
  ...props
}) => {
  return (
    <View className="mb-4">
      {label && <Text className="text-lg mb-1 font-bold text-gray-700">{label}</Text>}
      <TextInput
        className={`border text-lg p-3 rounded-lg bg-white ${error ? 'border-red-500' : 'border-gray-300'}`}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        {...props}
      />
      {error && <Text className="text-red-500 text-sm mt-1">{error}</Text>}
    </View>
  );
};

export default CustomInput;