import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

interface Props {
  title: string;
}

export const GlobalLayout: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  title,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textoHeader}>{title}</Text>

        <Image
          style={styles.avatar}
          source={{
            uri: 'https://avatars.githubusercontent.com/u/18153674?v=4',
          }}
        />
      </View>

      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  textoHeader: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
});
