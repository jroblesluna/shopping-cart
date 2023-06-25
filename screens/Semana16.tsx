import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackRootParams} from '../navigation/Root';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CartScreen} from './CartScreen';
import {AddProductScreen} from './AddProductScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

interface Props extends NativeStackScreenProps<StackRootParams, 'Semana16'> {}

export type TabRootParams = {
  AddProductScreen: undefined;
  CartScreen: undefined;
};

const Tab = createBottomTabNavigator<TabRootParams>();

const AddProductIcon = () => <Icon name="plus" size={30} color="black" />;
//const CartIcon = () => <Icon name="shopping-cart" size={30} color="black" />;
const CartIconWithBadge = ({count}) => {
  const digitCount = count.toString().length;
  const badgeWidth = 15 * digitCount;
  return (
    <View style={{position: 'relative'}}>
      <Icon name="shopping-cart" size={30} color="black" />
      {count > 0 && (
        <View style={[styles.badge, {width: badgeWidth}]}>
          <Text style={styles.badgeText}>{count}</Text>
        </View>
      )}
    </View>
  );
};

export const Semana16: React.FC<Props> = () => {
  const cartItemsCount = useSelector(state => state.cart.items.length);
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
          tabBarIcon: () => <CartIconWithBadge count={cartItemsCount} />,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    //top: -5,
    //right: -5,
    left: 20,
    backgroundColor: 'red',
    width: 15,
    height: 15,
    borderRadius: 5,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    //paddingHorizontal: 5,
    alignSelf: 'center',
  },
});
