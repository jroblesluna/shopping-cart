import React, {useEffect} from 'react';
import {ThemeProvider} from 'react-native-magnus';
import RNBootsplash from 'react-native-bootsplash';
import {NotifierWrapper} from 'react-native-notifier';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Root} from './navigation/Root';
import {Provider} from 'react-redux';
import {counterStore} from './stores/counter.store';

/**
 * Hackaton semana 15
 * Hacer una lista de todos (tareas) con react native y redux
 *
 * no hay necesidad de instalar otra libreria ademas de las que ya estan detalladas en el package.json
 *
 * Asi tiene que ser el formato del todo:
 * - id -> Date.now() o numeros aleatorios...
 * - text -> el todo o el nombre de la tarea
 * - completed -> el estado del todo, es decir si es verdadero (true) esta completado, si es falso (false) no esta completado
 *
 * Tiene que haber dos pantllas, una en la que se muestren todos los todos (tareas), un boton que lleve a otra pantalla
 * para crear un nuevo todo, y cada todo tiene que llevar a su propia pantalla con informacion del todo en especifico para poder ver
 * su informacion y cambiarla y tambien poder eliminarla
 */

const App: React.FC = () => {
  useEffect(() => {
    RNBootsplash.hide({
      fade: true,
    });
  }, []);

  return (
    <Provider store={counterStore}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <NotifierWrapper>
            <ThemeProvider>
              <Root />
            </ThemeProvider>
          </NotifierWrapper>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
