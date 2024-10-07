import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

import { useSession } from '@/lib/ctx';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import HomeScreen from './home';
import ResourcesScreen from './resources';
import UploadScreen from './upload';
import AdminScreen from './admin';
import ProfileScreen from './profile';


const Tab = createMaterialTopTabNavigator();

export default function Index() {
  const { signOut } = useSession();
  return (
      <Tab.Navigator
        initialRouteName='Home'
        tabBarPosition='bottom'
        keyboardDismissMode='on-drag' 
        className='bg-white'
        screenOptions={{
          tabBarActiveTintColor: '#007DFE',
          tabBarInactiveTintColor: '#9DB2CE',
          tabBarLabelStyle: styles.label,
          tabBarStyle: styles.tab,
        }}
        >
          <Tab.Screen name="Home" component={HomeScreen}
          options={{
            tabBarIndicator: () => null,
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            ),
          }}
          />
          <Tab.Screen name="Resources" component={ResourcesScreen}
          options={{
            tabBarIndicator: () => null,
            title: 'Resources',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'file-tray' : 'file-tray-outline'} color={color} />
            ),
          }}/>
          <Tab.Screen name="Upload" component={UploadScreen}
          options={{
            tabBarIndicator: () => null,
            title: 'Upload',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'cloud-upload' : 'cloud-upload-outline'} color={color} />
            ),
          }}/>
          <Tab.Screen name="Admin" component={AdminScreen}
          options={{
            title: 'Admin',
            tabBarIndicator: () => null,
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'settings' : 'settings-outline'} color={color} />
            ),
          }}/>
          <Tab.Screen name="Profile" component={ProfileScreen}
          options={{
            title: 'Profile',
            tabBarIndicator: () => null,
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
            ),
          }}/>
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tab: {
    margin: 'auto',
    marginBottom: 5,
    borderRadius: 50,
    overflow: 'hidden',
    backgroundColor: 'white',
    height: 70,
    width: '90%',
  },
  label: {
      textAlign: 'center',
      fontSize: 14,
      fontWeight: 'bold',
      textTransform: 'capitalize',
      margin: 0,
  },
  test: {
    backgroundColor: 'red',
  },
})
