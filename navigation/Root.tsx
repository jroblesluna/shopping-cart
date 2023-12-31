import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SilabosScreen} from '../screens/SilabosScreen';
import {SilaboScreen} from '../screens/SilaboScreen';
import {EditSilaboScreen} from '../screens/EditSilaboScreen';
import {Semana15} from '../screens/Semana15';
import {OtraPantalla} from '../screens/OtraPantalla';
import {Semana16} from '../screens/Semana16';

export type StackRootParams = {
  Semana16: undefined;
  Semana15: undefined;
  OtraPantalla: undefined;
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
      initialRouteName="Semana16"
      screenOptions={{
        animation: 'slide_from_right',
      }}>
      <Stack.Screen
        name="Semana16"
        component={Semana16}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Semana15"
        component={Semana15}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OtraPantalla"
        component={OtraPantalla}
        options={{
          headerShown: false,
        }}
      />
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
