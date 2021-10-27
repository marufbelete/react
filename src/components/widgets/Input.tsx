import { InputComponentsWrapper, InputLabel, TextInput, TextInputError } from '../styled-components/AuthPageStyledComponents';

interface InputProps {
    labelText : string,
    placeholder : string,
    type : string,
    error : string,
}

const Input = (props : InputProps) => {

    return (
        <InputComponentsWrapper>
            <InputLabel>{ props.labelText }</InputLabel>
            <TextInput
                type={ props.type }
                placeholder = { props.placeholder }
            />
            <TextInputError>{ props.error }</TextInputError>
        </InputComponentsWrapper>
    )
};

export default Input;
