import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackRootParams} from '../navigation/Root';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CartScreen} from './CartScreen';
import {AddProductScreen} from './AddProductScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props extends NativeStackScreenProps<StackRootParams, 'Semana16'> {}

export type TabRootParams = {
  AddProductScreen: undefined;
  CartScreen: undefined;
};

const Tab = createBottomTabNavigator<TabRootParams>();

const AddProductIcon = () => <Icon name="plus" size={30} color="black" />;
const CartIcon = () => <Icon name="shopping-cart" size={30} color="black" />;

export const Semana16: React.FC<Props> = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="AddProductScreen"
        component={AddProductScreen}
        options={{
          tabBarIcon: () => <AddProductIcon />,
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarIcon: () => <CartIcon />,
        }}
      />
    </Tab.Navigator>
  );
};
