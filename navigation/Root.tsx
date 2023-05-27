import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SilabosScreen} from '../screens/SilabosScreen';
import {SilaboScreen} from '../screens/SilaboScreen';
import {EditSilaboScreen} from '../screens/EditSilaboScreen';

export type StackRootParams = {
  SilabosScreen: undefined;
  SilaboScreen: {
    id: string;
  };
  EditSilaboScreen: {
    id: string;
  };
};

const Stack = createNativeStackNavigator<StackRootParams>();

export const Root: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="SilabosScreen"
      screenOptions={{
        animation: 'slide_from_right',
      }}>
      <Stack.Screen
        name="SilabosScreen"
        component={SilabosScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SilaboScreen"
        component={SilaboScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditSilaboScreen"
        component={EditSilaboScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
