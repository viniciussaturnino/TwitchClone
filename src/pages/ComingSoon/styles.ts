/* eslint-disable import/no-unresolved */
// import { Platform } from 'react-native';
import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: ${colors.primary};
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.Text`
  color: ${colors.purple};
  font-family: Roboto-Regular;
  font-size: 30px;
`;
