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

export default function ResourceCard({ item }: ResourceCardProps) {
  return (
    <TouchableOpacity className="w-full flex flex-row py-2 bg-white rounded-lg border border-gray-300 my-1">
        <Image
            source={item.image}
            className='w-44 h-44 rounded-lg mx-2'
            // style={{ width: 100, height: 100, borderRadius: 10 }}
        />

        <View className="w-full flex flex-col gap-1 mt-2 relative">
            <View className='flex flex-row justify-between items-start'>
                <Text className="bg-yellow-300/20 text-sm text-yellow-500 text-center px-3 py-1 rounded-full">{item.category}</Text>
                <Ionicons name="download-outline" size={24} color="#007DFE" />
            </View>
            <Text className="font-bold text-lg">{item.title}</Text>
            <View className='flex flex-row items-start'>
                <Ionicons name="person-outline" size={18} color="#007DFE" />
                <Text className="text-gray-500 text-lg ml-1">{item.added_by}</Text>
            </View>
        </View>
    </TouchableOpacity>
  );
}
