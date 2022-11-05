import styled from 'styled-components';

export const Container = styled.div`
    
    max-width: 1280px;
    margin: 0 auto;
    padding: 0rem 0rem 6rem 0rem;


`;


export const MoviesContainer = styled.div`

    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
    justify-items: center;

    @media (min-width: 420px){
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 840px){
        grid-template-columns: 1fr 1fr 1fr;
    }
    

`;


export const WrapperPaginationButton = styled.div``


export const PaginationContainer = styled.div`

width: 100%;
display: flex;
justify-content: center;
margin-top: 3.2rem;

`