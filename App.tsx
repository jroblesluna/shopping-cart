import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Image,
} from 'react-native';
import {GlobalLayout} from './components/layouts/GlobalLayout';
import {useData} from './hooks/useData';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: '1-770-736-8031 x56442';
}

export type Screens = 'posts' | 'comments' | 'photos' | 'users';

const screens: Screens[] = ['posts', 'comments', 'photos', 'users'];

const App = () => {
  const [screen, setScreen] = useState<Screens>('posts');
  const {data, isError, isLoading} = useData<{
    id: number;
    [key: string]: string | number;
  }>({
    url: `https://jsonplaceholder.typicode.com/${screen}?_start=0&_limit=10`,
  });

  const getTitle = () => {
    type Title = {
      [key in Screens]: string;
    };

    const titulos: Title = {
      posts: 'Posts',
      comments: 'Comments',
      photos: 'Photos',
      users: 'Users',
    };

    return titulos[screen];
  };

  if (isLoading) {
    return (
      <View style={styles.todaLaPantalla}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.todaLaPantalla}>
        <Text style={styles.texto}>Ocurrió un error</Text>
      </View>
    );
  }

  return (
    <GlobalLayout title={getTitle()} screens={screens} setScreen={setScreen}>
      <FlatList
        data={data}
        keyExtractor={({id}, key) => `post-${id}-${key}`}
        renderItem={({item}) => {
          if (screen === 'posts') {
            return (
              <View
                style={{
                  padding: 20,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#000',
                  }}>
                  {item.title}
                </Text>
                <Text>{item.body}</Text>
              </View>
            );
          }

          if (screen === 'comments') {
            return (
              <View
                style={{
                  padding: 20,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#000',
                  }}>
                  {item.name}
                </Text>
                <Text>{item.email}</Text>
                <Text>{item.body}</Text>
              </View>
            );
          }

          if (screen === 'users') {
            return (
              <View
                style={{
                  padding: 20,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#000',
                  }}>
                  {item.name}
                </Text>
                <Text>{item.email}</Text>
                <Text>{item.username}</Text>
                <Text>{item.phone}</Text>
                <Text>{item.body}</Text>
              </View>
            );
          }

          if (screen === 'photos') {
            console.log(item.url);
            return (
              <View
                style={{
                  padding: 20,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#000',
                  }}>
                  {item.title}
                </Text>
                <Image
                  style={styles.imagen}
                  source={{
                    uri: item.url as string,
                  }}
                />
              </View>
            );
          }

          return null;
        }}
      />
    </GlobalLayout>
  );
};

export default App;

const styles = StyleSheet.create({
  todaLaPantalla: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    padding: 20,
  },
  contenido: {
    paddingBottom: 100,
  },
  texto: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
  },
  imagen: {
    marginTop: 10,
    alignSelf: 'center',
    width: 300,
    height: 300,
    borderRadius: 8,
  },
  input: {
    marginTop: 10,
    backgroundColor: '#eee',
    borderRadius: 8,
    padding: 12,
  },
  buttonTouchable: {
    marginTop: 10,
    backgroundColor: '#D6E4FF',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTouchableText: {
    color: '#3366FF',
    fontWeight: '600',
    fontSize: 18,
  },
});
