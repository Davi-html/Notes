import styled from "styled-components";
import BackgroundImg from '../../assets/background.png'

export const Container = styled.div`
    height: 100vh;
    
    display: flex;
    align-items: stretch;
`
export const Form = styled.form`
    margin: 0 136px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    > h1 {
        font-size: 48px;
        font-weight: 700;

        color: ${({theme})=> theme.COLORS.ORANGE};
    }

    >p{
        color: ${({theme})=> theme.COLORS.GRAY_100};

        margin-bottom: 48px;
        font-size:14px ;
    }

    > h2 {
        margin-bottom: 48px;
    }

    .buttonText {
        margin-top: 124px;
    }

`;

export const Background = styled.div`
    flex: 1;
    background: url(${BackgroundImg}) no-repeat center center;
    background-size: cover;
`;  