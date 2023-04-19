import styled from 'styled-components/native';

export const UserCardWrapper = styled.View`
  border: 3px solid #8eaec4;
  background-color: #d9d9d9;
  padding: 20px;
  width: 100%;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
`;

export const PropertyText = styled.Text<{isName: boolean}>`
  font-size: ${({isName}) => (isName ? 20 : 16)}px;
  font-weight: ${({isName}) => (isName ? 'bold' : 'normal')};
  text-align: center;
  color: #283132;
`;

export const ActionsButtonsWrapper = styled.View`
  flex-direction: row;
  margin-top: 10px;
  gap: 20px;
`;

export const ActionButton = styled.TouchableOpacity``;

export const ActionButtonText = styled.Text<{color: string}>`
  color: ${({color}) => color};
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  padding: 0 25px;
  align-items: center;
  gap: 5px;
`;

export const FieldInput = styled.TextInput`
  font-size: 16px;
  background: white;
  border: 2px solid #8eaec4;
  border-radius: 5px;
  padding: 5px;
  width: 80%;
  height: 30px;
`;
