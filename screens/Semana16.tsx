import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackRootParams} from '../navigation/Root';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CartScreen} from './CartScreen';
import {AddProductScreen} from './AddProductScreen';

interface Props extends NativeStackScreenProps<StackRootParams, 'Semana16'> {}

export type TabRootParams = {
  AddProductScreen: undefined;
  CartScreen: undefined;
};

const Tab = createBottomTabNavigator<TabRootParams>();

export const Semana16: React.FC<Props> = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AddProductScreen" component={AddProductScreen} />
      <Tab.Screen name="CartScreen" component={CartScreen} />
    </Tab.Navigator>
  );
};
