import styled, { css } from 'styled-components';

interface props {
    isSelected: boolean;
}

export const Container = styled.button<props>`
  padding: 12px;
  border-style: none;
  background-color: #000;
  color: #898989;
  border-radius: 4px;
  cursor: pointer;

  ${props => props.isSelected && css`
  
  background-color: #898989;
    color: #000;

  `}

  & + button {
    margin-left: 12px;
  }
`;
