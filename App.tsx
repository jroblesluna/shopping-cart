import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {GlobalLayout} from './components/layouts/GlobalLayout';
import {useData} from './hooks/useData';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const App = () => {
  // https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10
  // https://jsonplaceholder.typicode.com/comments?_start=0&_limit=10
  // https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10
  // https://jsonplaceholder.typicode.com/users?_start=0&_limit=10
  const {data, isError, isLoading} = useData<Post>({
    url: 'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10',
  });

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
    <GlobalLayout title="Posts">
      <FlatList
        data={data}
        keyExtractor={({id}, key) => `post-${id}-${key}`}
        renderItem={({item: {title, body}}) => {
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
                {title}
              </Text>
              <Text>{body}</Text>
            </View>
          );
        }}
      />
    </GlobalLayout>
  );

  // return (
  //   <ScrollView style={styles.container}>
  //     <View style={styles.contenido}>
  //       <Text style={styles.texto}>Hola Mundo desde IDAT</Text>
  //       <Image
  //         style={styles.imagen}
  //         source={require('./assets/wallpaper.jpg')}
  //         resizeMode="contain"
  //       />
  //       <Image
  //         style={styles.imagen}
  //         source={require('./assets/wallpaper.jpg')}
  //         resizeMode="contain"
  //       />
  //       <TextInput
  //         style={styles.input}
  //         placeholder="Ingresa tu correo"
  //         value={text}
  //         onChangeText={texto => setText(texto)}
  //       />
  //       <Text>Tu texto tiene {text.length} letras</Text>

  //       <Button
  //         color="black"
  //         onPress={() => {
  //           Linking.openURL('instagram://user?username=apple');
  //         }}
  //         title="Presioname"
  //       />

  //       <TouchableOpacity
  //         activeOpacity={0.9}
  //         style={styles.buttonTouchable}
  //         onPress={() => Alert.alert('hola mundo')}>
  //         <Text style={styles.buttonTouchableText}>Presioname</Text>
  //       </TouchableOpacity>
  //     </View>
  //   </ScrollView>
  // );
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
