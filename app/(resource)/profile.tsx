import {Alert, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '@/components/button';

export default function ProfileScreen() {

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
        { text: "Yes", onPress: () => console.log("OK Pressed") }
      ]
    );
  }

  return (
    <View className={"mt-10 mx-2 p-3 flex-1"}>
      <Text className="font-medium text-4xl my-2">Your Profile</Text>

      <View className='items-center'>
        <View className='w-28 h-28 bg-black rounded-full'>
          <Image
            source={require('@/assets/images/samuel.jpg')}
            className='w-full h-full rounded-full'
          />
          <View className='w-8 h-8 bg-[#007DFE] rounded-full absolute bottom-0 right-0 items-center justify-center'>
            <Ionicons name="pencil" size={16} color="white" />
          </View>
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

