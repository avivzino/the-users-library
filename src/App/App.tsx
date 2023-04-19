import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './Navigation';
import {store} from '../store/store';
import {AppHeader} from '../components/appHeader';
import * as S from './App.style';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <S.AppWrapper>
          <AppHeader />
          <Navigation />
        </S.AppWrapper>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
