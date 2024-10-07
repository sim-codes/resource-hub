import {Text, View, FlatList, ScrollView, Image, ImageSourcePropType } from 'react-native';
import Hero from '@/components/hero';
import { resources } from '@/lib/data';
import ResourceCard from '@/components/resourceCard';
import HResourceCard from '@/components/hReousrceCard';
import { Link } from 'expo-router';


interface CategoryProps {
  iconName: ImageSourcePropType;
  label: string;
}

const categories = [
  {
    id: '1',
    label: 'Art',
    image: require('@/assets/icons/art.png')
  },
  {
    id: '2',
    label: 'Science',
    image: require('@/assets/icons/science.png')
  },
  {
    id: '3',
    label: 'Coding',
    image: require('@/assets/icons/code.png')
  },
  {
    id: '4',
    label: 'Law',
    image: require('@/assets/icons/law.png')
  }
]

export default function HomeScreen() {
  return (
    <ScrollView className='bg-white flex-1'>
      <View className={"p-3 flex-1"}>
        <Hero isHome={true} firstname="Michael" subtitle="Start your learning journey" />
        <Text className="font-medium text-4xl my-2">Recommended</Text>

        <ResourceCard item={resources[0]} />

        <Text className="font-medium text-4xl my-2">Recently Updated</Text>

        <View>
        <FlatList
          keyboardDismissMode='on-drag'
          className=''
          horizontal={true}
          showsHorizontalScrollIndicator={false}
              data={resources}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <HResourceCard item={item} />}
          />
        </View>

        <View className='flex flex-row justify-between my-2'>
          <Text className="font-medium text-4xl my-1">Categories</Text>
          <Text className='text-yellow-500 font-medium text-xl'>See all</Text>
        </View>

        <View className='flex flex-row justify-between items-center'>
          {categories.map((category) => (
            <Category key={category.id} label={category.label} iconName={category.image} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const Category: React.FC<CategoryProps> = ({ iconName, label }) => {
  return (
    <View className='flex flex-col items-center'>
      <View className='w-16 h-16 bg-[#007DFE]/20 rounded-full items-center justify-center'>
        <Image source={iconName} className='w-8 h-8' />
      </View>
      <Text className='text-xl my-1'>{label}</Text>
    </View>
  )
}
