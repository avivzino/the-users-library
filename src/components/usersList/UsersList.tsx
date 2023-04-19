import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {User} from '../../types/common';
import {UserCard} from '../userCard';
import * as S from './UsersList.style';

export const UsersList = () => {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    axios
      .get('https://randomuser.me/api/?results=10')
      .then(response => {
        setUsers(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <S.UsersListWrapper
      contentContainerStyle={{
        alignItems: 'center',
        gap: 20,
        paddingBottom: 100,
      }}>
      {users?.map(user => (
        <UserCard key={user.id.value ?? user.login.uuid} userData={user} />
      ))}
    </S.UsersListWrapper>
  );
};
