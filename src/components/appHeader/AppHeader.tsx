import React from 'react';
import {useNavigation} from '@react-navigation/native';
import * as S from './AppHeader.style';
import logo from '../../assets/images/logo.png';
import {Image} from 'react-native';

export const AppHeader = () => {
  const navigation = useNavigation();

  return (
    <S.AppHeaderWrapper>
      <Image source={logo} style={{height: 35, width: '88%'}} />
      <S.NavBarButtonsWrapper>
        <S.NavButton onPress={() => navigation.navigate('Users' as never)}>
          <S.NavText>Users</S.NavText>
        </S.NavButton>
        <S.NavButton onPress={() => navigation.navigate('AddUser' as never)}>
          <S.NavText>Add User</S.NavText>
        </S.NavButton>
      </S.NavBarButtonsWrapper>
    </S.AppHeaderWrapper>
  );
};
