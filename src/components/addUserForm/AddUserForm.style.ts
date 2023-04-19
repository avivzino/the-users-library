import styled from 'styled-components/native';

export const AddUserFormWrapper = styled.View`
  padding: 15px 45px;
  width: 100%;
  gap: 20px;
  margin-top: 20px;
`;

export const FieldWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const FieldText = styled.Text`
  font-size: 18px;
  padding-end: 10px;
`;

export const FieldInput = styled.TextInput`
  border: 2px solid #8eaec4;
  border-radius: 5px;
  padding: 5px;
  width: 75%;
  font-size: 18px;
`;

export const SubmitButton = styled.TouchableOpacity`
  border: 2px solid #8eaec4;
  border-radius: 5px;
  background-color: #336a86;
  padding: 10px;
  width: 40%;
  margin-top: 20px;
  align-self: center;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: white;
`;
