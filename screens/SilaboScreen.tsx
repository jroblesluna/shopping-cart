import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {type StackRootParams} from '../navigation/Root';

interface Props
  extends NativeStackScreenProps<StackRootParams, 'SilaboScreen'> {}

// En esta pantalla tiene que mostrarse un contenido del silabo
// URL: /silabo/:id -> /silabo/_lI_9GfSoGldc3KX3S_vN
// Devuelve: Silabo
// En esta pantalla debería haber un botón para editar el silabo y para elimianr el silabo
// para editar el silabo debería llevar a la pantalla correspondiente, y para borrarlo solo es
// necesario un botón y su llamada a la api correspondiente

export const SilaboScreen: React.FC<Props> = () => {
  return null;
};
