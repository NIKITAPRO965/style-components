import styled from 'styled-components';

export const List = styled.ul`
width: 100%;
list-style: none; 
padding: 0;
margin: 0;
background-color: purple;
display: grid;
grid-template-columns: repeat(3,1fr);
gap: 50px;
`

export const Item = styled.li`
padding: 10px;
border-radius: 10px;
background-color: ${({$isOnline}) => $isOnline ? "green" : "yellow"};
/* background-color: ${({ $isOnline }) => $isOnline ? "green" : "yellow"}; */
`;


export const Title = styled.h2`
color: red;
font-size: 40px;
`

export const Text = styled.p`
color: ${(prop) => {
    switch(prop.$role){
        case "student":
            return "blue";
        case "admin":
            return "tomato";
        case "teacher":
            return "black";
    }
}}
`