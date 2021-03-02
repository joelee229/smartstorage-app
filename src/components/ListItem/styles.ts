import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient)`
    width: 100%;
    height: 72px;
    border-radius: 16px;

    padding: 0px 16px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
`;

export const Title = styled.Text`
    font-family: 'Ubuntu_700Bold';
    font-size: 24px;
    color: black;
`;

export const Text = styled.Text`
    font-family: 'Roboto_500Medium';
    font-size: 16px;
    color: black;
`;

export const Button = styled.TouchableOpacity`
    background: black;
    border-radius: 16px;
    width: 32px;
    height: 32px;
    justify-content: center;
    align-items: center;
`;

export const ChangeContainer = styled.View``;