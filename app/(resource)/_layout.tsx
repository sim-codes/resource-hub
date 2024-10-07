import { Tabs, Stack } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  return (
    <View className='flex-1 py-5'>
      <Tabs
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#007DFE',
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 50,
          margin: 10,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          margin: 5,
        }
      }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="resources"
          options={{
            title: 'Resources',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'file-tray' : 'file-tray-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="upload"
          options={{
            title: 'Upload',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'cloud-upload' : 'cloud-upload-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="admin"
          options={{
            title: 'Admin',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'settings' : 'settings-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
            ),
          }}
        />
    </Tabs>
    </View>
  );
}
