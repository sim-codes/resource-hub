import React, { useState } from "react";
import { Text, View, Alert, TouchableOpacity } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import CustomInput from '@/components/input';
import CustomButton from '@/components/button';
import { Feather } from '@expo/vector-icons';

interface FileInfo {
  uri: string;
  name: string;
  size: number;
  mimeType: string;
}

export default function UploadScreen() {
  const [courseName, setCourseName] = useState<string>("");
  const [courseDescription, setCourseDescription] = useState<string>("");
  const [file, setFile] = useState<FileInfo | null>(null);

  const handleFilePick = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf',
        copyToCacheDirectory: false,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const selectedFile = result.assets[0];
        if (selectedFile.uri && selectedFile.name && selectedFile.size !== undefined && selectedFile.mimeType) {
          if (selectedFile.size > 10 * 1024 * 1024) {
            Alert.alert('File too large', 'Please select a file smaller than 10MB');
          } else {
            setFile({
              uri: selectedFile.uri,
              name: selectedFile.name,
              size: selectedFile.size,
              mimeType: selectedFile.mimeType
            });
          }
        } else {
          Alert.alert('Error', 'Selected file is missing required information');
        }
      }
    } catch (err) {
      console.error('Error picking document:', err);
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      Alert.alert('No file selected', 'Please select a file before submitting');
      return;
    }

    // Here you would typically upload the file to your server
    // This is a placeholder for the actual upload logic
    console.log('Uploading file:', file.name);
    console.log('Course Name:', courseName);
    console.log('Course Description:', courseDescription);

    // Simulating an upload process
    Alert.alert('Upload Successful', 'Your file has been uploaded successfully');
  };

  return (
    <View className="mt-10 mx-2 p-3 flex-1">
      <Text className="font-bold text-xl">Media Upload</Text>
      <Text>Add your documents here, or upload resources</Text>

      <TouchableOpacity onPress={handleFilePick}>
        <View className="border-dotted border-2 border-[#007DFE] rounded-lg p-5 h-60 mt-5 flex justify-center items-center">
          <View className="bg-[#007DFE] p-2 rounded-full my-1">
            <Feather name="upload" size={24} color="white" />
          </View>

          <Text className="text-lg font-semibold">Click to upload file or browse</Text>
          <Text className="font-semibold">Maximum file size 10mb (PDF)</Text>
          {file && <Text className="mt-2">Selected: {file.name}</Text>}
        </View>
      </TouchableOpacity>

      <View className="mt-5">
        <CustomInput
          label="Course Name"
          value={courseName}
          onChangeText={setCourseName}
          placeholder="Introduction to Computing"
          autoCapitalize="words"
        />

        <CustomInput
          label="Course Description"
          value={courseDescription}
          onChangeText={setCourseDescription}
          placeholder="You will learn the fundamentals of computing"
          autoCapitalize="words"
        />

        <CustomButton
          title="Submit"
          onPress={handleSubmit}
          isLoading={false}
          disabled={!courseName || !file}
          variant="primary"
          size="large"
        />
      </View>
    </View>
  );
}