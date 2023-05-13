import React, {useEffect} from 'react';
import {Div, Text, Button} from 'react-native-magnus';
import {StackRootParams} from '../navigation/Root';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useData} from '../hooks/useData';
import {LoadingLayout} from '../components/layouts/LoadingLayout';
import {generateRandomNumber} from '../utils/generateRandomNumber';

interface Props extends NativeStackScreenProps<StackRootParams, 'TodoScreen'> {}

export const TodoScreen: React.FC<Props> = ({navigation, route}) => {
  const id = route.params.id;
  const {data, isError, isLoading} = useData<{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }>({
    url: `https://jsonplaceholder.typicode.com/todos/${id}`,
  });

  useEffect(() => {
    if (!data) return;

    navigation.setOptions({
      title: data.title,
    });
  }, [navigation, data]);

  if (isLoading || !data) return <LoadingLayout />;

  return (
    <Div>
      <Text fontSize="4xl" fontWeight="bold">
        {data.title}
      </Text>
      <Text>{data.id}</Text>
      <Text>Está completado? {data.completed ? 'Si' : 'No'}</Text>

      <Button
        onPress={() => {
          navigation.push('TodoScreen', {
            id: generateRandomNumber(),
          });
        }}>
        Ir a un todo aleatorio
      </Button>
    </Div>
  );
};
