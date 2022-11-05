import styled from 'styled-components';

export const Container = styled.div`
    
    max-width: 1280px;
    margin: 0 auto;
    padding: 0rem 0rem 6rem 0rem;

`;


export const MovieMainContainer = styled.div`
    
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 55px;

    img {
        height: 316px;
        width: 230px;
        border-radius: 16px;
    }

    div {


        h2 {
            color: #fff;
            font-size: 36px;
            font-weight: 500;
        }

        h4 {
            color: #fff;
            font-size: 18px;
            font-weight: 500;

        }

        p {
            margin-top: 32px;
            color: #898989;
            font-size: 16px;
            text-align: justify;
        }
    }


    @media (min-width: 640px){
        flex-direction: row;


        div {
            margin-top: 115px;

        }
    }



`;

export const ButtonWrapper = styled.div`

width: 100%;
display: flex;
justify-content: center;
margin-top: 4.2rem;

button {

    background-color: #898989;
    padding: 12px 54px;
    border-radius: 18px;
    border: 2px solid #898989;
    transition: all .2s;

    &:hover {
        color: #898989;
        background-color: transparent;
    }

}

`