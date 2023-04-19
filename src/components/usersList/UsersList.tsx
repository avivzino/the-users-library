import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {getUpdatedUsers, setUpdatedUsers} from '../../store/reducer';
import {UserCard} from '../userCard';
import {FieldsToUpdate, User} from '../../types/common';
import * as S from './UsersList.style';

export const UsersList = () => {
  const dispatch = useDispatch();
  const updatedUsers = useSelector(getUpdatedUsers);
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get(
          'https://randomuser.me/api/?results=10',
        );
        setUsers(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    if (!users) {
      fetchUsers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (users) {
      dispatch(setUpdatedUsers(users));
    }
  }, [dispatch, users]);

  const usersList = updatedUsers ?? users;

  const onUserDelete = (userId?: string) => {
    const filteredUsers = usersList.filter(
      user => (user.id?.value || user.login?.uuid) !== userId,
    );
    dispatch(setUpdatedUsers(filteredUsers));
  };

  const onUserChange = ({
    updatedFields,
    userId,
  }: {
    updatedFields: FieldsToUpdate;
    userId?: string;
  }) => {
    const mappedUsers = usersList.map(user => {
      if (user.id?.value === userId || user.login?.uuid === userId) {
        return {
          ...user,
          name: {title: '', first: updatedFields.name, last: ''},
          email: updatedFields.email,
          location: {
            country: '',
            city: updatedFields.location,
            street: {number: '', name: ''},
          },
        };
      }
      return user;
    });
    dispatch(setUpdatedUsers(mappedUsers));
  };

  return (
    <S.UsersListWrapper
      contentContainerStyle={{
        alignItems: 'center',
        gap: 20,
        paddingBottom: 20,
      }}>
      {usersList.map(user => (
        <UserCard
          key={user.id?.value ?? user.login?.uuid}
          user={user}
          onDelete={onUserDelete}
          onChange={onUserChange}
        />
      ))}
    </S.UsersListWrapper>
  );
};
