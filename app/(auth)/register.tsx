import { useState } from "react";
import { Text, View } from "react-native";
import { Link } from 'expo-router';
import CustomInput from '@/components/input';
import CustomButton from '@/components/button';
import DropdownInput from "@/components/dropdown";
import {Picker} from '@react-native-picker/picker';


export default function RegisterScreen() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [selectedValue, setSelectedValue] = useState('');

    const [selectedDepartment, setSelectedDepartment] = useState();
    const [selectedLevel, setSelectedLevel] = useState();

    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ];

    const handleLogin = () => {
        alert("Login");
    }

    return (
    <View className={"mt-10 mx-2 p-5 flex-1 justify-center"}>
        <Text className={"text-4xl font-bold"}>Register</Text>

        <View className={"mt-5"}>
            <CustomInput
                label="Name"
                value={name}
                onChangeText={setName}
                placeholder="Enter your full name"
                autoCapitalize="none"
            />
            <CustomInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <View className="flex gap-2 flex-row mb-2">
                <View>
                    <Text className="text-lg mb-1 font-bold text-gray-700">Department</Text>
                    <View className="border text-lg w-60 py-1 mb-2 rounded-lg bg-white border-gray-300">
                    <Picker
                        selectedValue={selectedDepartment}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedDepartment(itemValue)
                        }>
                        <Picker.Item label="Computer Science" value="csc" />
                        <Picker.Item label="Information Technology" value="ift" />
                        <Picker.Item label="Cyber Security" value="cyb" />
                    </Picker>
                    </View>
                </View>

                <View>
                    <Text className="text-lg mb-1 font-bold text-gray-700">Level</Text>
                    <View className="border text-lg w-36 py-1 mb-2 rounded-lg bg-white border-gray-300">
                    <Picker
                        selectedValue={selectedLevel}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLevel(itemValue)
                        }>
                        <Picker.Item label="100" value="100" />
                        <Picker.Item label="200" value="200" />
                        <Picker.Item label="300" value="300" />
                        <Picker.Item label="400" value="400" />
                    </Picker>
                    </View>
                </View>
            </View>

            <CustomInput
                label="Password"
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                secureTextEntry
            />
        </View>

        <CustomButton
            title="Register"
            onPress={handleLogin}
            isLoading={false}
            disabled={!email || !password}
            variant="primary"
            size="large"
        />

        <Text className={"text-center mt-5 text-lg text-[#667085]"}>Already have an account? <Link href="/login" className={"text-[#2C27F5]"}>Log In</Link></Text>
    </View>
    );
}
