import styled from 'styled-components/native';

export const ModalWrapper = styled.Modal.attrs({
  transparent: true,
})``;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Message = styled.Text`
  margin-bottom: 20px;
`;

export const ButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px 20px;
  border-radius: 5px;
`;

export const CancelButton = styled(Button)`
  background-color: #ddd;
`;

export const DeleteButton = styled(Button)`
  background-color: #ff0000;
`;

export const ButtonText = styled.Text<{color: string}>`
  color: ${({color}) => color};
`;
