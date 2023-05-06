import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen';
import {TodoScreen} from '../screens/TodoScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import {SettingsScreen} from '../screens/SettingsScreen';

export type StackRootParams = {
  HomeScreen: undefined;
  SettingsScreen: undefined;
  ProfileScreen: undefined;
  TodoScreen: {
    id: number;
  };
};

const Stack = createNativeStackNavigator<StackRootParams>();

export const Root: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="TodoScreen" component={TodoScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};
