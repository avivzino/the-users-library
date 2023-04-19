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
  color: #336a86;
`;
