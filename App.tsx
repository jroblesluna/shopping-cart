import React, {useEffect} from 'react';
import {ThemeProvider} from 'react-native-magnus';
import RNBootsplash from 'react-native-bootsplash';
import {NotifierWrapper} from 'react-native-notifier';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Root} from './navigation/Root';

const App: React.FC = () => {
  useEffect(() => {
    RNBootsplash.hide({
      fade: true,
    });
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <NotifierWrapper>
          <ThemeProvider>
            <Root />
          </ThemeProvider>
        </NotifierWrapper>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
