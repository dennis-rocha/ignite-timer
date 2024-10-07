import { ButtonContainer, ButtonVarient } from "./Button.styles"

interface ButtonProps {
    varient?: ButtonVarient
}

export function Button({varient = 'primary'}: ButtonProps) {
    return (
        <ButtonContainer varient={varient}>
            salvar
        </ButtonContainer>
    )
    
}