import React, {useEffect} from 'react';
import {ThemeProvider} from 'react-native-magnus';
import RNBootsplash from 'react-native-bootsplash';
import {NotifierWrapper} from 'react-native-notifier';
import {HomeScreen} from './screens/HomeScreen';
import {VolumenScreen} from './screens/VolumenScreen';

const App: React.FC = () => {
  useEffect(() => {
    RNBootsplash.hide({
      fade: true,
    });
  }, []);

  return (
    <NotifierWrapper>
      <ThemeProvider>
        <HomeScreen />

        {/* <VolumenScreen /> */}
      </ThemeProvider>
    </NotifierWrapper>
  );
};

export default App;
