import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen';
import {TodoScreen} from '../screens/TodoScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import {SettingsScreen} from '../screens/SettingsScreen';
import {BottomTabsScreen} from '../screens/BottomTabsScreen';

export type StackRootParams = {
  HomeScreen: undefined;
  BottomTabsScreen: undefined;
};

const Stack = createNativeStackNavigator<StackRootParams>();

export const Root: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        animation: 'slide_from_right',
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BottomTabsScreen"
        component={BottomTabsScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="TodoScreen"
        component={TodoScreen}
        options={{
          title: 'Todo',
        }}
      />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} /> */}
    </Stack.Navigator>
  );
};
