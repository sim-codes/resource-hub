import React from 'react';
import { TouchableOpacity, Image, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

interface ResourceCardProps {
    item: {
        id: string;
        image: any;
        title: string;
        added_by: string;
        category: string;
    };
}

export default function HResourceCard({ item }: ResourceCardProps) {
  return (
    <TouchableOpacity className="w-56 gap-y-2 flex-col justify-between items-start p-2 bg-white rounded-lg my-1">
        <Image
            source={item.image}
            className='w-full h-40 rounded-lg'
        />

        <Text className="text-xl">{item.title}</Text>

        <View className='w-full flex flex-row items-center justify-between'>
            <View className='flex flex-row items-center'>
                <Ionicons name="person-outline" size={16} color="#007DFE" />
                <Text className="text-lg ml-1">{item.added_by}</Text>
            </View>

            <Text className="bg-yellow-300/20 text-sm text-yellow-500 text-center px-3 py-1 rounded-full">{item.category}</Text>
        </View>
    </TouchableOpacity>
  );
}
