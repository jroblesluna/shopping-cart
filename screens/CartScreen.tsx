import React from 'react';
import {FlatList} from 'react-native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {TabRootParams} from './Semana16';
import {Product} from '../reducers/cart.reducer';

interface Props extends BottomTabScreenProps<TabRootParams, 'CartScreen'> {}

export const CartScreen: React.FC<Props> = () => {
  // Los productos hay que traerlo desde redux
  const cart = [] as Product[];

  return (
    <FlatList
      data={cart}
      renderItem={() => null}
      keyExtractor={product => product.id}
    />
  );
};
