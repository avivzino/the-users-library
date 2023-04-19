import styled from 'styled-components/native';

export const AppHeaderWrapper = styled.View`
  align-items: center;
  padding-top: 30px;
`;

export const HeaderText = styled.Text`
  font-size: 35px;
  font-weight: bold;
  padding-bottom: 20px;
`;

export const NavBarButtonsWrapper = styled.View`
  flex-direction: row;
  gap: 55px;
  margin-top: 20px;
`;

export const NavButton = styled.TouchableOpacity`
  border-bottom-width: 2px;
  border-bottom-color: #336a86;
  padding: 7px;
  margin-bottom: 20px;
`;

export const NavText = styled.Text`
  font-size: 20px;
  color: #283132;
`;
