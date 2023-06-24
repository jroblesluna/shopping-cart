import React from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import {TabRootParams} from './Semana16';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {generateImage} from '../utils/generateImage';

interface Props
  extends BottomTabScreenProps<TabRootParams, 'AddProductScreen'> {}

export const AddProductScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar productos al carrito</Text>

      <View style={{marginTop: 24}}>
        <TextInput
          style={styles.input}
          placeholder="Agrega el nombre del producto"
        />
        <TextInput
          style={styles.input}
          placeholder="Agrega el precio del producto"
          keyboardType="numeric"
        />
        <Button
          title="Agregar Producto"
          onPress={() => {
            // lógica para agregar producto al estado...

            // Tener en cuenta que para agregar un nuevo producto hay que generar un ID único
            // id: Date.now();
            // image: generateImage()

            // luego llamar esto:
            navigation.navigate('CartScreen');
          }}
        />
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
