import React, { useState, useEffect } from 'react';
import { Text, View, Pressable, Platform, FlatList } from 'react-native';
import Pagination from '@/components/pagination';
import CustomButton from '@/components/button';
import ResourceListTable from '@/components/resourcesList';
import { ItemType } from '@/lib/definitions';

const departmentItems: ItemType[] = [
  {id: Math.random().toString(12).substring(2), course_code: 'CSC', title: 'Computer Science' },
  { id: Math.random().toString(12).substring(2), course_code: 'MTH', title: 'Mathematics' },
  { id: Math.random().toString(12).substring(2), course_code: 'PHY', title: 'Physics' },
  { id: Math.random().toString(12).substring(2), course_code: 'CHM', title: 'Chemistry' },
  { id: Math.random().toString(12).substring(2), course_code: 'BIO', title: 'Biology' },
  { id: Math.random().toString(12).substring(2), course_code: 'ENG', title: 'English' },
  { id: Math.random().toString(12).substring(2), course_code: 'HIS', title: 'History' },
];

const courseItems: ItemType[] = [
  { id: Math.random().toString(12).substring(2), course_code: 'CSC101', title: 'Introduction to Programming' },
  { id: Math.random().toString(12).substring(2), course_code: 'MTH201', title: 'Calculus I' },
  { id: Math.random().toString(12).substring(2), course_code: 'PHY301', title: 'Classical Mechanics' },
  { id: Math.random().toString(12).substring(2), course_code: 'CHM101', title: 'General Chemistry' },
  { id: Math.random().toString(12).substring(2), course_code: 'BIO201', title: 'Cell Biology' },
  { id: Math.random().toString(12).substring(2), course_code: 'ENG101', title: 'Composition' },
  { id: Math.random().toString(12).substring(2), course_code: 'HIS101', title: 'World History' },
];

const ITEMS_PER_PAGE = 5;

export default function AdminScreen() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [activeTab, setActiveTab] = useState('department');
  const [paginatedItems, setPaginatedItems] = useState<ItemType[]>([]);

  useEffect(() => {
    const items = activeTab === 'department' ? departmentItems : courseItems;
    setTotalPages(Math.ceil(items.length / ITEMS_PER_PAGE));
    setCurrentPage(1);
    updatePaginatedItems(items);
  }, [activeTab]);

  useEffect(() => {
    const items = activeTab === 'department' ? departmentItems : courseItems;
    updatePaginatedItems(items);
  }, [currentPage, activeTab]);

  const updatePaginatedItems = (items: ItemType[]) => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    setPaginatedItems(items.slice(startIndex, endIndex));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderItem = ({ item }: { item: ItemType }) => (
    <ResourceListTable item={item} />
  );

  return (
    <View className="flex-1 mt-10 mx-2 p-3">
      <Text className="font-medium text-4xl my-2">Admin</Text>

      <View className='w-full flex-row justify-between bg-gray-200 border p-1 border-gray-400 rounded-lg'>
        <Pressable
          onPress={() => setActiveTab('department')}
          className={`p-2 w-1/3 rounded-lg ${activeTab === 'department' ? 'bg-[#007DFE]' : ''}`}>
          <Text
            className={`text-md font-bold text-center ${activeTab === 'department' ? 'text-white' : ''}
              ${Platform.OS === 'ios' ? 'text-md' : 'text-lg'}
            `}
          >Department</Text>
        </Pressable>
        <Pressable
          onPress={() => setActiveTab('course')}
          className={`p-2 w-1/3 rounded-lg ${activeTab === 'course' ? 'bg-[#007DFE]' : ''}`}>
          <Text
            className={`font-bold text-center ${activeTab === 'course' ? 'text-white' : ''}
              ${Platform.OS === 'ios' ? 'text-md' : 'text-lg'}
            `}
          >Courses</Text>
        </Pressable>
        <Pressable
          onPress={() => setActiveTab('upload')}
          className={`p-2 w-1/3 rounded-lg ${activeTab === 'upload' ? 'bg-[#007DFE]' : ''}
             ${Platform.OS === 'ios' ? 'text-md' : 'text-lg'}
          `}>
          <Text
            className={`text-md font-bold text-center ${activeTab === 'upload' ? 'text-white' : ''}`}
          >Upload</Text>
        </Pressable>
      </View>

      <View className="flex-1">
        {activeTab !== 'upload' && (
          <>
            <Text className="font-medium text-4xl my-2">
              {activeTab === 'department' ? 'Department' : 'Course'} List
            </Text>
            <FlatList
              data={paginatedItems}
              renderItem={renderItem}
              keyExtractor={(item) => item.course_code}
              className="flex-grow"
            />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
        {activeTab === 'upload' && (
          <Text className="font-medium text-2xl my-2">Upload Content Here</Text>
          // Add your upload component or logic here
        )}
      </View>

      {/* <CustomButton
        className='mt-4'
        title="Save"
        onPress={() => alert('Submitted')}
        isLoading={false}
        disabled={false}
        variant="primary"
        size="large"
      /> */}
    </View>
  );
}
