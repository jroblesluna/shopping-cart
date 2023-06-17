import React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

export const OtraPantalla = () => {
  // @ts-ignore
  const counter = useSelector(state => state.counter.value);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 240, fontWeight: 'bold', color: '#000'}}>
        {counter}
      </Text>
    </View>
  );
};
