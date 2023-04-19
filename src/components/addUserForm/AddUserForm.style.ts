import styled from 'styled-components/native';

export const AddUserFormWrapper = styled.View`
  padding: 15px;
  width: 100%;
  gap: 20px;
  margin-top: 20px;
`;

export const FieldWrapper = styled.View`
  flex-direction: row;
  // align-self: center;
  align-items: center;
`;

export const FieldText = styled.Text`
  font-size: 18px;
  padding-end: 5px;
`;

export const FieldInput = styled.TextInput`
  border: 2px solid pink;
  padding: 5px;
  width: 75%;
  font-size: 18px;
`;

export const SubmitButton = styled.TouchableOpacity`
  border: 2px solid pink;
  padding: 15px;
  background: grey;
  width: 50%;
  margin-top: 20px;
  align-self: center;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  text-align: center;
`;
