import styled, { css } from 'styled-components/native';

interface ContainerProps {
    isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
    width: 100%;
    height: 56px;
    border-width: 1px;
    border-color: rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    justify-content: center;
    padding: 0 16px;

    ${(props) => props.isFocused && css`
        border-width: 2px;
        border-color: #008DF4;
    `}

    margin-top: 8px;
`;

export const Label = styled.Text`
    margin-top: 8px;
    font-family: 'Ubuntu_700Bold';
    font-size: 14px;
`;

export const TextInput = styled.TextInput`
    flex: 1;
    color: #666666;
    font-size: 16px;
    font-family: 'Roboto_400Regular';
`;