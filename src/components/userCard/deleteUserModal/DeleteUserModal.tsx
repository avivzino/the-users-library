import React from 'react';
import * as S from './DeleteUserModal.style';

interface Props {
  isModalVisible: boolean;
  setModalVisible: (value: React.SetStateAction<boolean>) => void;
  handleDelete: () => void;
}

export const DeleteUserModal = ({
  isModalVisible,
  setModalVisible,
  handleDelete,
}: Props) => {
  return (
    <S.ModalWrapper visible={isModalVisible}>
      <S.ModalContainer>
        <S.ModalContent>
          <S.Title>Confirm Delete</S.Title>
          <S.Message>Are you sure you want to delete this user?</S.Message>
          <S.ButtonWrapper>
            <S.CancelButton onPress={() => setModalVisible(false)}>
              <S.ButtonText color="#000">Cancel</S.ButtonText>
            </S.CancelButton>
            <S.DeleteButton onPress={handleDelete}>
              <S.ButtonText color="#fff">Delete</S.ButtonText>
            </S.DeleteButton>
          </S.ButtonWrapper>
        </S.ModalContent>
      </S.ModalContainer>
    </S.ModalWrapper>
  );
};
