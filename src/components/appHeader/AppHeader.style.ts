import styled from 'styled-components/native';

export const AppHeaderWrapper = styled.View`
  align-items: center;
  padding-top: 20px;
`;

export const HeaderText = styled.Text`
  font-size: 35px;
  font-weight: bold;
  padding-bottom: 20px;
`;

export const NavBarButtonsWrapper = styled.View`
  flex-direction: row;
  gap: 15px;
`;

export const NavButton = styled.TouchableOpacity`
  border: 2px solid pink;
  padding: 15px;
  margin-bottom: 10px;
`;

export const NavText = styled.Text`
  font-size: 20px;
`;
