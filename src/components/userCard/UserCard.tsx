import React from 'react';
import {Image} from 'react-native';
import {User} from '../../types/common';
import * as S from './UserCard.style';
import {userProperties} from './config';

interface Props {
  userData: User;
}

export const UserCard = ({userData}: Props) => (
  <S.UserCardWrapper>
    <Image
      source={{uri: userData.picture?.medium}}
      style={{width: 170, height: 170}}
    />
    {userProperties.map(property => (
      <S.PropertyText key={property.label} isName={property.label === ''}>
        {property.label}
        {property.value(userData)}
      </S.PropertyText>
    ))}
  </S.UserCardWrapper>
);
