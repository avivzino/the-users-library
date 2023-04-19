import React, {useState} from 'react';
import {Image} from 'react-native';
import {DeleteUserModal} from './deleteUserModal';
import {userProperties} from './config';
import {FieldsToUpdate, User} from '../../types/common';
import userAvatar from '../../assets/images/userAvatar.png';
import * as S from './UserCard.style';

interface Props {
  user: User;
  onDelete: (userId?: string) => void;
  onChange: ({
    updatedFields,
    userId,
  }: {
    updatedFields: FieldsToUpdate;
    userId?: string;
  }) => void;
}

export const UserCard = ({user, onDelete, onChange}: Props) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [updatedFields, setUpdatedFields] = useState<FieldsToUpdate>({
    name: userProperties[0].value(user),
    email: userProperties[1].value(user),
    location: userProperties[2].value(user),
  });
  const [isModalVisible, setModalVisible] = useState(false);
  const userId = user.id?.value ?? user.login?.uuid;

  const handleDelete = () => {
    setModalVisible(false);
    onDelete(userId);
  };

  const handleChange = (text: string, propertyKey: keyof FieldsToUpdate) => {
    setUpdatedFields(prev => ({
      ...prev,
      [propertyKey]: text,
    }));
    onChange({updatedFields, userId});
  };

  const renderProperties = () => {
    if (isEditMode) {
      return userProperties.map(
        property =>
          property.editable && (
            <S.InputWrapper key={property.key}>
              <S.PropertyText isName={property.label === ''}>
                {property.label}
              </S.PropertyText>
              <S.FieldInput
                value={updatedFields[property.key as keyof FieldsToUpdate]}
                onChangeText={text =>
                  handleChange(text, property.key as keyof FieldsToUpdate)
                }
              />
            </S.InputWrapper>
          ),
      );
    }

    return userProperties.map(property => (
      <S.PropertyText key={property.key} isName={property.label === ''}>
        {property.label}
        {property.value(user)}
      </S.PropertyText>
    ));
  };

  return (
    <>
      <S.UserCardWrapper>
        <Image
          source={
            user.picture?.medium ? {uri: user.picture?.medium} : userAvatar
          }
          style={{width: 128, height: 128}}
        />
        {renderProperties()}
        <S.ActionsButtonsWrapper>
          <S.ActionButton onPress={() => setIsEditMode(prev => !prev)}>
            <S.ActionButtonText color="#336A86">
              {isEditMode ? 'Save' : 'Edit'}
            </S.ActionButtonText>
          </S.ActionButton>
          <S.ActionButton onPress={() => setModalVisible(true)}>
            <S.ActionButtonText color="#ff0000">Delete</S.ActionButtonText>
          </S.ActionButton>
        </S.ActionsButtonsWrapper>
      </S.UserCardWrapper>
      <DeleteUserModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        handleDelete={handleDelete}
      />
    </>
  );
};
