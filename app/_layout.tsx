import { Stack, Link, Slot } from 'expo-router';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import { NativeWindStyleSheet } from "nativewind";
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { SessionProvider } from "@/lib/ctx";
import Constants from 'expo-constants';

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const statusBarHeight = Constants.statusBarHeight;
  console.log(statusBarHeight);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SessionProvider>
      <SafeAreaView style={{marginTop: statusBarHeight, flex: 1}}>
        <Slot />
      </SafeAreaView>
    </SessionProvider>
  );
}
