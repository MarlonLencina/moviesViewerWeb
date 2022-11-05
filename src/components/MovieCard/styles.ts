import styled from 'styled-components';

export const Container = styled.div`

  height: 316px;
  width: 230px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 16px;

  }

  filter: grayscale(1);
  transition: all .3s;

  :hover {
    
    filter: grayscale(0);
    transform: scale(0.98);

  }
`;
