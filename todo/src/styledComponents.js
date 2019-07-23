import styled from 'styled-components';

export const ClearButton = styled.button`
    height: 140px;
    font-size: 76px;
    border-radius: 20px;
    background-color: mediumaquamarine;
    margin: 30px 0px;
    &:hover{
        box-shadow: inset 0 0 30px 100px rgba(255, 255, 255, 0.1);
        transition-duration: 0.15s;
    }
`

export const SubmitButton = styled.button`
    width: 150px;
    font-size: 28px;
    height: 75px;
    border-radius: 20px;
    margin-left: 15px;
    background-color: mediumaquamarine;
    &:hover{
        box-shadow: inset 0 0 30px 100px rgba(255, 255, 255, 0.1);
        transition-duration: 0.15s;
    }
`

export const Input = styled.input`
    width: 500px;
    height 75px;
    font-size: 28px;
    border-radius: 20px;
`