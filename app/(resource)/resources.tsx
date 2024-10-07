import {Text, View, KeyboardAvoidingView, FlatList, Image } from 'react-native';
import Hero from '@/components/hero';
import { resources } from '@/lib/data';
import ResourceCard from '@/components/resourceCard';


export default function ResourcesScreen() {
  return (
    <View className={"mt-10 mx-2 p-3 flex-1"}>
      <Hero isHome={false} />
      <Text className="font-medium text-4xl my-2">Resources</Text>

        <FlatList
        keyboardDismissMode='on-drag'
        className='mt-1 mb-16'
            showsVerticalScrollIndicator={false}
            data={resources}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ResourceCard item={item} />}
        />
    </View>
  );
}

