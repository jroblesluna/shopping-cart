import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {ButtonScreen} from '../atoms/ButtonScreen';
import {Screens} from '../../App';

interface Props {
  title: string;
  screens: Screens[];
  setScreen: React.Dispatch<React.SetStateAction<Screens>>;
}

export const GlobalLayout: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  title,
  screens,
  setScreen,
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

      <View style={styles.screensButtonsContainer}>
        {screens.map((screen, key) => (
          <ButtonScreen
            key={key}
            title={screen}
            onPress={() => setScreen(screen)}
          />
        ))}
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
    marginTop: 20,
    paddingHorizontal: 20,
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
  screensButtonsContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
});
