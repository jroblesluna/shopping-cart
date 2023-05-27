import React, {useState, useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {type StackRootParams} from '../navigation/Root';
import {type Silabo} from '../types';
import {http} from '../utils/http';

interface Props
  extends NativeStackScreenProps<StackRootParams, 'SilabosScreen'> {}

// En esta pantalla tiene que mostrarse todo el contenido del silabo
// URL: /silabo
// Devuelve: Silabo[]

export const SilabosScreen: React.FC<Props> = () => {
  const [silabo, setSilabo] = useState<Silabo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();

    http
      .get<Silabo[]>('/silabo', {
        signal: controller.signal,
      })
      .then(data => {
        setSilabo(data.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return null;
};
