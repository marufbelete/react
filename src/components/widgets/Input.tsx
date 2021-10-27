import { InputComponentsWrapper, InputLabel, TextInput, TextInputError } from '../styled-components/AuthPageStyledComponents';

interface InputProps {
    labelText : string,
    placeholder : string,
    type : string,
    error : string,
    onInputChange : (value : string) => void
}

const Input = (props : InputProps) => {

    return (
        <InputComponentsWrapper>
            <InputLabel>{ props.labelText }</InputLabel>
            <TextInput
                type={ props.type }
                placeholder = { props.placeholder }
                onChange = { (e) => props.onInputChange(e.target.value)}
            />
            <TextInputError>{ props.error }</TextInputError>
        </InputComponentsWrapper>
    )
};

export default Input;
