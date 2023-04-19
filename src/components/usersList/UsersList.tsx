import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {User} from '../../types/common';
import {UserCard} from '../userCard';
import * as S from './UsersList.style';
import {getUpdatedUsers, setUpdatedUsers} from '../../store/reducer';

export const UsersList = () => {
  const dispatch = useDispatch();
  const updatedUsers = useSelector(getUpdatedUsers);
  const [users, setUsers] = useState<User[]>();
  console.log(users);

  // useEffect(() => {
  //   axios
  //     .get('https://randomuser.me/api/?results=10')
  //     .then(response => {
  //       setUsers(response.data.results);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);

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
    console.log({users});
    if (!users) {
      fetchUsers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (users) {
      dispatch(setUpdatedUsers(users));
    }
    // console.log('@@@@@@');
  }, [dispatch, users]);

  // console.log({updatedUsers});
  // console.log({users});

  const usersList = updatedUsers ?? users;

  return (
    <S.UsersListWrapper
      contentContainerStyle={{
        alignItems: 'center',
        gap: 20,
        paddingBottom: 20,
      }}>
      {/* {updatedUsers?.map(user => (
        <UserCard key={user.id?.value ?? user.login?.uuid} userData={user} />
      ))} */}
      {usersList.map(user => (
        <UserCard key={user.id?.value ?? user.login?.uuid} userData={user} />
      ))}
    </S.UsersListWrapper>
  );
};
