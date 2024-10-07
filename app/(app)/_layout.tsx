import { Stack } from 'expo-router';
import { useSession } from '@/lib/ctx';
import { Text } from 'react-native';

export const unstable_settings = {
    initialRouteName: '(root)',
};

export default function AppLayout() {
    const { session, isLoading } = useSession();
    if (isLoading) {
        return <Text>Loading...</Text>;
      }
    return (
    <Stack>
        <Stack.Screen name="(root)" options={{ headerShown: false }} />
        <Stack.Screen
        name="sign-in"
        options={{
            presentation: 'modal',
            headerShown: false,
        }}
        />
    </Stack>
    );
}
