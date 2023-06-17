import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement, reset} from '../reducers/counter.reducer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackRootParams} from '../navigation/Root';

interface Props extends NativeStackScreenProps<StackRootParams, 'Semana15'> {}

export const Semana15: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  // @ts-ignore
  const counter = useSelector(state => state.counter.value);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 24, color: '#000', fontWeight: '700'}}>
        Contador: {counter}
      </Text>
      <View style={{flexDirection: 'row', marginTop: 24, gap: 10}}>
        <Button title="Sumar" onPress={() => dispatch(increment())} />
        <Button title="Restar" onPress={() => dispatch(decrement())} />
        <Button title="Resetear" onPress={() => dispatch(reset())} />
      </View>

      <View style={{marginTop: 48}}>
        <Button
          title="Ir a otra pantalla"
          onPress={() => navigation.navigate('OtraPantalla')}
        />
      </View>
    </View>
  );
};
