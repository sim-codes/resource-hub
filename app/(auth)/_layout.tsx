import { Tabs, Stack } from 'expo-router';
import React from 'react';
import { Text, View } from "react-native";
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        // <Tabs
        // screenOptions={{
        //     tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        //     headerShown: false,
        // }}>
        // <Tabs.Screen
        //     name="login"
        //     options={{
        //     title: 'Login',
        //     tabBarIcon: ({ color, focused }) => (
        //         <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
        //     ),
        //     }}
        // />
        // <Tabs.Screen
        //     name="register"
        //     options={{
        //     title: 'Signup',
        //     tabBarIcon: ({ color, focused }) => (
        //         <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
        //     ),
        //     }}
        // />
        // </Tabs>
        <Stack screenOptions={{ headerShown: false }} />
    );
}
