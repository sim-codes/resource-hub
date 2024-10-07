import { useState } from 'react';
import {Text, View, Pressable } from 'react-native';
import Pagination from '@/components/pagination';
import CustomButton from '@/components/button';

export default function AdminScreen() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(4);
  const [activeTab, setActiveTab] = useState('department');

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <View className={"mt-10 mx-2 p-3 flex-1"}>
      <Text className="font-medium text-4xl my-2">Admin</Text>

      <View className='w-full flex-row justify-between bg-gray-200 border p-1 border-gray-400 rounded-lg'>
        <Pressable
        onPress={() => setActiveTab('department')}
        className={`p-2 w-1/3  rounded-lg text-lg ${activeTab === 'department' ? 'bg-black text-white':''}`}>
          <Text
          className={`w-full ${activeTab === 'department' ? 'bg-black text-white':''}`}
          >Department</Text>
        </Pressable>
        <Pressable
        onPress={() => setActiveTab('course')}
        className={`p-2 w-1/3  rounded-lg text-lg ${activeTab === 'course' ? 'bg-black text-white':''}`}>
          <Text>Course</Text>
        </Pressable>
        <Pressable
        onPress={() => setActiveTab('upload')}
        className={`p-2 w-1/3  rounded-lg text-lg ${activeTab === 'upload' ? 'bg-black text-white':''}`}>
          <Text>Upload</Text>
        </Pressable>
      </View>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <CustomButton
        className='my-2'
        title="Save"
        onPress={() => alert('Submitted')}
        isLoading={false}
        disabled={false}
        variant="primary"
        size="large"
      />
    </View>
  );
}

