import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {type StackRootParams} from '../navigation/Root';

interface Props
  extends NativeStackScreenProps<StackRootParams, 'EditSilaboScreen'> {}

// En esta pantalla tiene que editarse un contenido del silabo
// URL: /silabo/:id -> /silabo/_lI_9GfSoGldc3KX3S_vN
// Devuelve: string

export const EditSilaboScreen: React.FC<Props> = ({navigation, route}) => {
  return null;
};
