import { Tabs, Stack } from 'expo-router';
import React from 'react';
import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView } from "react-native";
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <SafeAreaView className="flex-1 bg-white">
        <StatusBar style="dark" backgroundColor="white" />
        <Stack>
            <Stack.Screen name="(root)" options={{ headerShown: false }} />
            {/* <Stack.Screen
            name="modal"
            options={{
                presentation: 'formSheet',
            }}
            /> */}
            <Stack.Screen name="login" options={{ headerShown: false }} />
            <Stack.Screen name="register" options={{ headerShown: false }} />
        </Stack>
        </SafeAreaView>
    );
}
