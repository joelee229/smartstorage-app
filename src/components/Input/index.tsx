import React, { useEffect, useRef, useImperativeHandle, forwardRef, useState, useCallback } from 'react';
// Propriedades de um TextInput do react-native
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Container, TextInput, Label } from './styles';
import { useIsFocused } from '@react-navigation/native';

// Gerando uma interface para dizer o tipo do nosso componente abaixo
// Ele vai herdar todas as props de TextInputPropx
interface InputProps extends TextInputProps {
    // Para o unform
    name: string;
    label: string;
}

interface InputValueReference {
    value: string;
}

interface InputRef {
    focus(): void
}

// React.ForwardRefRenderFunction => É o único tipo de function que retorna o ref 
// Ae faz ele retornar duas coisas o ref como InputRef e o resto como InputProps
const Input: React.ForwardRefRenderFunction<InputRef ,InputProps> = ({label, name, ...rest}, ref) => {
    const inputElementRef = useRef<any>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    // Registrar um campo dentro do formulário
    const { registerField, defaultValue = '', fieldName, error } = useField(name);
    const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

    // Forma de enviar informações para o componente pai
    // Parametros: (ref, Uma função que retorna quais informações eu quero jogar nesse ref)
    // Essa ref que vem é a ref que criamos no component signIn para o input password
    useImperativeHandle(ref, () => ({
        focus() {
            // Realiza o focus nesse input em específico
            inputElementRef.current.focus();
        }
    }));

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);

        // !! => Operador condicional de existência
        setIsFilled(!!inputValueRef.current.value);
        // mesmo que
        // if(inputValueRef.current.value){
        //     setIsFilled(true);
        // }
    }, []);

    useEffect(() => {
        registerField<string>({
            name: fieldName,
            ref: inputValueRef.current,
            path: 'value',
            setValue(ref: any, value) {
                inputValueRef.current.value = value;
                // Muda visualmente o texto que tá dentro do input
                inputElementRef.current.setNaviteProps({ text: value });
            },
            clearValue() {
                inputValueRef.current.value = '';
                inputElementRef.current.clear();
            },
        });
    }, [fieldName, registerField]);

    return(
        <>
            <Label>
                {label}
            </Label>
            <Container isFocused={isFocused} isErrored={!!error} >
                <TextInput 
                    defaultValue={defaultValue}
                    onChangeText={(value) => {
                        inputValueRef.current.value = value;
                    }}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    {...rest} 
                />
            </Container>
        </>
    );
}

export default forwardRef(Input);