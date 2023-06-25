import React, {useState} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import {TabRootParams} from './Semana16';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {useDispatch} from 'react-redux';
import {add} from '../reducers/cart.reducer';
import {generateImage} from '../utils/generateImage';

interface Props
  extends BottomTabScreenProps<TabRootParams, 'AddProductScreen'> {}

export const AddProductScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleAddProduct = () => {
    const newProduct = {
      id: Date.now().toString(),
      name: productName,
      price: parseFloat(productPrice),
      image: generateImage(),
    };

    dispatch(add({product: newProduct}));

    navigation.navigate('CartScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar productos al carrito</Text>

      <View style={{marginTop: 24}}>
        <TextInput
          style={styles.input}
          placeholder="Agrega el nombre del producto"
          value={productName}
          onChangeText={text => setProductName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Agrega el precio del producto"
          keyboardType="numeric"
          value={productPrice}
          onChangeText={text => setProductPrice(text)}
        />
        <Button title="Agregar Producto" onPress={handleAddProduct} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
