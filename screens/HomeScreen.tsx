import React from 'react';
import {FlatList, ScrollView} from 'react-native';
import {Button, Div, Text} from 'react-native-magnus';
import {useData} from '../hooks/useData';
import {LoadingLayout} from '../components/layouts/LoadingLayout';
import {Notifier, NotifierComponents} from 'react-native-notifier';

const MyTodo: React.FC<{
  title: string;
  completed: boolean;
}> = ({title, completed}) => {
  return (
    <Div bg="blue500" p="xl" m="md" rounded="lg">
      <Text fontSize="2xl" fontWeight="bold" color="white">
        {title}
      </Text>
      <Text color="gray200">
        {completed ? 'Está completado' : 'No esta completado'}
      </Text>
    </Div>
  );
};

export const HomeScreen = () => {
  const {data, isError, isLoading} = useData<{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }>({
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
                Notifier.showNotification({
                  title: 'John Doe',
                  description: 'Hello! Can you help me with notifications?',
                  onHidden: () => console.log('Hidden'),
                  onPress: () => console.log('Press'),
                  Component: NotifierComponents.Notification,
                });
              }}>
              Press me
            </Button>
          </Div>
        );
      }}
      renderItem={({item: {id, title, completed}}) => (
        <MyTodo title={title} completed={completed} />
      )}
    />
  );
};
