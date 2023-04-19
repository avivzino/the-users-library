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
          {/* Should be in AppHeader */}

          {/* <S.Header>The Users Library</S.Header>
          <S.AddUserButton onPress={() => setIsAddUserClicked(prev => !prev)}>
            <S.AddUserText>Add User</S.AddUserText>
          </S.AddUserButton>
          {isAddUserClicked ? <AddUser /> : <UsersList />} */}
          {/* <Users /> */}
          <Navigation />
        </S.AppWrapper>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
