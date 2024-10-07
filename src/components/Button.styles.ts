import styled, { css } from "styled-components";

export type ButtonVarient = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'

interface ButtonContainerProps {
    varient: ButtonVarient
}

const buttonVarients = {
    primary: 'blue',
    secondary: 'green',
    success: 'green',
    danger: 'red',
    warning: 'yellow',
    info: 'blue',
    light: 'white',
    dark: 'black'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;

    background-color: ${props => props.theme.primary};
    /* ${props => {
        return css`background-color: ${buttonVarients[props.varient]}`
    }} */
`