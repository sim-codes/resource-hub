import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, TouchableOpacityProps } from 'react-native';

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  disabled = false,
  ...props
}) => {
  const baseStyle = 'flex items-center justify-center rounded-lg';
  
  const variantStyles = {
    primary: 'bg-[#2C27F5] border-[#2C27F5]',
    secondary: 'bg-gray-500 border-gray-500',
    outline: 'bg-transparent border-[#2C27F5]',
  };
  
  const sizeStyles = {
    small: 'px-3 py-1',
    medium: 'px-4 py-2',
    large: 'px-6 py-4',
  };
  
  const textStyles = {
    primary: 'text-white',
    secondary: 'text-white',
    outline: 'text-blue-500',
  };
  
  const disabledStyle = disabled ? 'opacity-50' : '';
  
  const buttonStyle = `${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyle}`;
  const textStyle = `font-bold ${textStyles[variant]} ${size === 'small' ? 'text-md' : 'text-lg'}`;

  return (
    <TouchableOpacity
      className={buttonStyle}
      onPress={onPress}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color={variant === 'outline' ? '#3B82F6' : 'white'} />
      ) : (
        <Text className={textStyle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;