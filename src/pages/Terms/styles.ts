import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
    flex: 1;
`;

export const ImageBackground = styled.ImageBackground`
    flex: 1;
`;

export const Head = styled.View`
    width: 100%;
    padding: ${Constants.statusBarHeight + 8}px 24px 8px;
    flex-direction: row;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: 'Ubuntu_700Bold';
    font-size: 28px;
    color: black;
    padding: 0 24px;
`;

export const Body = styled.View`
    flex: 1;
    padding: 0 24px;
`;

export const Text = styled.Text`
    font-family: 'Roboto_400Regular';
    font-size: 20px;
    color: #1F161E;
    text-align: justify;
`;