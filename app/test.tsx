import { View, Text, StatusBar, SafeAreaView, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <SafeAreaView className={"flex-1"}>
      <View className={"flex-1 mt-10"}>
        <Text className={"text-red-800"}>Edit app/index.tsx to edit this screen.</Text>
      </View>
    </SafeAreaView>
  );
}
