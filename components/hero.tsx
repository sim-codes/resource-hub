import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';

interface HeroProps {
    firstname?: string;
    subtitle?: string;
    isHome: boolean;
    isProfile?: boolean;
}



const Hero: React.FC<HeroProps> = ({
    firstname,
    subtitle,
    isHome,
    isProfile,
}) => {
    return (
        <View className="mb-4 bg-[#007DFE] rounded-lg p-5 overflow-hidden">
            {isHome && (
                <>
                <Text className="text-white text-2xl font-semibold">Hi {firstname}</Text>
                <Text className="text-white my-2">{subtitle}</Text>
                </>
            )}

            <View className='flex flex-row items-center'>
                <View
                    className="w-[90%] flex flex-row items-center justify-between px-3 py-2 bg-white rounded-lg my-5"
                >
                    <TextInput
                        className="flex-1 text-md p-1 focus-visible:outline-none focus-visible:ring-0 focus-visible:border-none" placeholder="Search" />
                    <Ionicons name="search" size={20} color="#2C27F5" />
                </View>

                <Link href={'/modal'} className="w-full border-2 border-white px-3 py-2 ml-2 rounded-l-full">
                    <AntDesign name="filter" size={24} color="white" />
                </Link>
            </View>
        </View>
    );
}

export default Hero;