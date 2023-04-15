import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
}

export const ButtonScreen: React.FC<Props> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.boton}>
      <Text style={styles.texto}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    flex: 1,
    backgroundColor: '#D6E4FF',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  texto: {
    color: '#3366FF',
    fontWeight: '500',
    fontSize: 10,
  },
});
