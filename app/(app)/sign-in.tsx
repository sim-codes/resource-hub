import { useState } from "react";
import { Text, View } from "react-native";
import { Link, Stack, router } from 'expo-router';
import CustomInput from '@/components/input';
import CustomButton from '@/components/button';
import { useSession } from "@/lib/ctx";


export default function LoginScreen() {
    const { signIn } = useSession();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        signIn({ email, password });
        router.replace('/')
    }

    return (
        <View className={"mt-10 mx-2 p-5 flex-1 justify-center"}>
            <Text className={"text-4xl font-bold"}>Hello</Text>
            <Text className={"text-4xl font-bold"}>Welcome Back!</Text>

            <View className={"mt-5"}>
                <CustomInput
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Enter your email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <CustomInput
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Enter your password"
                    secureTextEntry
                />
            </View>

            <Link href="/(auth)/login" className={"text-[#2C27F5] text-right -mt-3 mb-10 font-medium text-lg"}>Forgot Password?</Link>

            <CustomButton
                title="Login"
                onPress={handleLogin}
                isLoading={false}
                disabled={!email || !password}
                variant="primary"
                size="large"
            />

            <Text className={"text-center mt-5 text-lg text-[#667085]"}>Don't have an account? <Link href="/register" className={"text-[#2C27F5]"}>Register</Link></Text>
        </View>
    );
}
