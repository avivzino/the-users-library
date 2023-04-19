import React from 'react';
import {Image} from 'react-native';
import {User} from '../../types/common';
import * as S from './UserCard.style';

interface Props {
  userData: User;
}

export const UserCard = ({userData}: Props) => {
  console.log(userData.picture.medium);
  return (
    <S.UserCardWrapper>
      <S.Name>
        {userData.name.title} {userData.name.first} {userData.name.last}
      </S.Name>
      <Image
        source={{uri: userData.picture.medium}}
        style={{width: 150, height: 150}}
      />
      <S.PropertyText>Email: {userData.email}</S.PropertyText>
      <S.PropertyText>
        Address: {userData.location.street.name}{' '}
        {userData.location.street.number}, {userData.location.city},{' '}
        {userData.location.country}
      </S.PropertyText>
    </S.UserCardWrapper>
  );
};
