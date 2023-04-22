import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Div, Text} from 'react-native-magnus';

export const LoadingLayout = () => {
  return (
    <Div flex={1} alignItems="center" justifyContent="center">
      <ActivityIndicator />
    </Div>
  );
};
