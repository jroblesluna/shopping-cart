import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {Button, Div, Text} from 'react-native-magnus';
import {useData} from '../hooks/useData';
import {LoadingLayout} from '../components/layouts/LoadingLayout';
import {type NativeStackScreenProps} from '@react-navigation/native-stack';
import {type StackRootParams} from '../navigation/Root';

const MyTodo: React.FC<{
  title: string;
  completed: boolean;
  onPress: () => void;
}> = ({title, completed, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Div bg="blue500" p="xl" m="md" rounded="lg">
        <Text fontSize="2xl" fontWeight="bold" color="white">
          {title}
        </Text>
        <Text color="gray200">
          {completed ? 'Está completado' : 'No esta completado'}
        </Text>
      </Div>
    </TouchableOpacity>
  );
};

interface Props extends NativeStackScreenProps<StackRootParams, 'HomeScreen'> {}

export const HomeScreen: React.FC<Props> = ({navigation}) => {
  const {data, isError, isLoading} = useData<
    {
      userId: number;
      id: number;
      title: string;
      completed: boolean;
    }[]
  >({
    url: 'https://jsonplaceholder.typicode.com/todos?_start=0&_limit=500',
  });

  if (isLoading) return <LoadingLayout />;

  return (
    <FlatList
      data={data}
      keyExtractor={({id}) => String(id)}
      ListHeaderComponent={() => {
        return (
          <Div>
            <Button
              onPress={() => {
                navigation.navigate('SettingsScreen');
              }}>
              Press me
            </Button>
          </Div>
        );
      }}
      renderItem={({item: {id, title, completed}}) => (
        <MyTodo
          title={title}
          completed={completed}
          onPress={() =>
            navigation.navigate('TodoScreen', {
              id,
            })
          }
        />
      )}
    />
  );
};
