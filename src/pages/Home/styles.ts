import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas: 
    "brand header"
    "menu search"
    "menu content"
    "newnote content";

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
`;
export const Brand = styled.div`
    grid-area: brand;
    background-color: red;

    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom-width:1px ;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    > h1 {
        font-size: 24px;

        color: ${({theme}) => theme.COLORS.ORANGE};
    }

`;
export const Menu = styled.ul`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    grid-area: menu;
    display: flex;
    flex-direction: column;
    padding-top: 64px;
    align-items:center;

    > li:first-child button {
        color: ${({theme}) => theme.COLORS.ORANGE};
    }

    > li button {
        margin-bottom: 24px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    > li {
        list-style: none;
    }

   
`;
export const Search = styled.div`
    grid-area: search;

    padding: 64px 64px 0px;
`;
export const Content = styled.div`
    grid-area: content;

    padding: 0 64px;
    overflow-y: auto;
`;
export const NewNote = styled.button`
    grid-area: newnote;
    background-color: ${({theme}) => theme.COLORS.ORANGE};
    color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    border: none;
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;