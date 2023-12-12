/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

interface ButtonContainerProps {
  margin?: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  ${props => (props.margin ? `margin: ${props.margin};` : '')}
  color: white;
  background-color: #450051;
`;