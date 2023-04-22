import React from 'react';
import {ThemeProvider} from 'react-native-magnus';
import {HomeScreen} from './screens/HomeScreen';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <HomeScreen />
    </ThemeProvider>
  );
};

export default App;
