import {Alert, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '@/components/button';
import { useSession } from '@/lib/ctx';
import { useState } from 'react';
import * as ImagePicker from "expo-image-picker";

export default function ProfileScreen() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { signOut } = useSession();

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      // mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select an image.');
    }
  }

  function handleLogout() {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => signOut() }
      ]
    );
  }

  return (
    <View className={"p-3 flex-1 bg-white"}>
      <Text className="font-medium text-4xl my-2">Your Profile</Text>

      <View className='items-center'>
        <View className='w-28 h-28 bg-black rounded-full'>
          <Image
            source={require('@/assets/images/samuel.jpg')}
            className='w-full h-full rounded-full'
          />
          <Pressable
          onPress={ ()=> {}}
          className='w-8 h-8 bg-[#007DFE] rounded-full absolute bottom-0 right-0 items-center justify-center'>
            <Ionicons name="pencil" size={16} color="white" />
          </Pressable>
        </View>
        <Text className="text-4xl my-2">Segun Michael</Text>
      </View>

      <View>
        <View className='flex-row items-center justify-between gap-x-2 border-b-2 px-3 py-4 border-gray-200'>
          <View className='flex-row items-center gap-x-2'>
            <Ionicons name="person-outline" size={26} color="#007DFE" />
            <Text className='text-xl'>Your profile</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#007DFE" />
        </View>

        <TouchableOpacity
        onPress={handleLogout}
        className='flex-row items-center justify-between gap-x-2 border-b-2 px-3 py-4 border-gray-200'>
          <View className='flex-row items-center gap-x-2'>
            <Ionicons name="log-out-outline" size={26} color="#007DFE" />
            <Text className='text-xl'>Log Out</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#007DFE" />
        </TouchableOpacity>

        <CustomButton
          title="Save"
          onPress={() => ({})}
          size='large'
          className='mt-28'
        />
      </View>
    </View>
  );
}

