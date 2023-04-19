import React, {useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {addNewUser, getUpdatedUsers} from '../../store/reducer';
import {formFields} from './config';
import {NewUser} from '../../types/common';
import * as S from './AddUserForm.style';

export const AddUserForm = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const updatedUsers = useSelector(getUpdatedUsers);
  const [userDetails, setUserDetails] = useState<NewUser>({
    name: '',
    email: '',
    street: '',
    city: '',
    country: '',
  });

  const handleOnSubmit = () => {
    // Check if any field is empty
    for (const key in userDetails) {
      if (userDetails[key as keyof NewUser] === '') {
        Alert.alert('Error', 'All fields are required', [{text: 'OK'}], {
          cancelable: false,
        });
        return;
      }
    }

    // Check if name is at least 3 characters long
    if (userDetails.name.length < 3) {
      Alert.alert(
        'Error',
        'Name should be at least 3 characters long',
        [{text: 'OK'}],
        {
          cancelable: false,
        },
      );
      return;
    }

    // Check if email is valid
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(userDetails.email)) {
      Alert.alert('Error', 'Invalid email address', [{text: 'OK'}], {
        cancelable: false,
      });
      return;
    }

    // Check if email is already in use by another user
    const emailExists = updatedUsers.some(
      user => user.email === userDetails.email,
    );
    if (emailExists) {
      Alert.alert('Error', 'Email already in use', [{text: 'OK'}], {
        cancelable: false,
      });
      return;
    }

    dispatch(
      addNewUser({
        name: {title: '', first: userDetails.name, last: ''},
        email: userDetails.email,
        location: {
          country: userDetails.country,
          city: userDetails.city,
          street: {number: '', name: userDetails.street},
        },
        id: {value: (Math.floor(Math.random() * 90000) + 10000).toString()},
      }),
    );
    navigation.navigate('Users' as never);
  };

  return (
    <S.AddUserFormWrapper>
      {formFields.map(field => (
        <S.FieldWrapper key={field.key}>
          <S.FieldText>{field.label}</S.FieldText>
          <S.FieldInput
            value={userDetails[field.key as keyof NewUser]}
            onChangeText={text =>
              setUserDetails({...userDetails, [field.key]: text})
            }
          />
        </S.FieldWrapper>
      ))}
      <S.SubmitButton onPress={handleOnSubmit}>
        <S.SubmitText>Submit</S.SubmitText>
      </S.SubmitButton>
    </S.AddUserFormWrapper>
  );
};
