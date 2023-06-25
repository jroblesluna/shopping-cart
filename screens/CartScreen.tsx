import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {TabRootParams} from './Semana16';
import {useSelector, useDispatch} from 'react-redux';
import {Product, clear} from '../reducers/cart.reducer';
import {Image, Text, View} from 'react-native-animatable';

interface Props extends BottomTabScreenProps<TabRootParams, 'CartScreen'> {}

const CartItem: React.FC<{product: Product}> = ({product}) => {
  return (
    // Aquí puedes renderizar la información del producto en un componente personalizado para cada elemento de la lista
    // por ejemplo:
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={{uri: product.image}} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>Producto: {product.name}</Text>
        <Text style={styles.price}>Precio: ${product.price}</Text>
        <Text style={styles.sku}>SKU: {product.id}</Text>
      </View>
    </View>
  );
};

export const CartScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();

  // Los productos hay que traerlo desde redux
  //const cart = [] as Product[];
  const cart = useSelector(
    (state: {cart: {items: Product[]}}) => state.cart.items,
  );
  const handleGoAddProduct = () => {
    navigation.navigate('AddProductScreen');
  };
  const handleClearCart = () => {
    dispatch(clear());
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        //renderItem={() => null}
        renderItem={({item}) => <CartItem product={item} />}
        keyExtractor={product => product.id}
      />
      <View style={styles.itemContainer}>
        <TouchableOpacity
          style={styles.addProductButton}
          onPress={handleGoAddProduct}>
          <Text style={styles.addProductButtonText}>Seguir Comprando</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.clearButton} onPress={handleClearCart}>
          <Text style={styles.clearButtonText}>Limpiar Carrito</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Agregado
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
  },
  sku: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  addProductButton: {
    backgroundColor: 'navy',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  addProductButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  clearButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  clearButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
