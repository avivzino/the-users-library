import React from 'react';
import {SafeAreaView} from 'react-native';
import {UsersList} from '../components/usersList';
import * as S from './App.style';

const App = (): JSX.Element => {
  console.log('hello');

  // console.log(data);

  return (
    <SafeAreaView>
      {/* <ScrollView contentInsetAdjustmentBehavior="automatic"> */}
      <S.AppWrapper>
        <S.Header>The Users Library</S.Header>
        <UsersList />
        {/* </ScrollView> */}
      </S.AppWrapper>
    </SafeAreaView>
  );
};

export default App;
