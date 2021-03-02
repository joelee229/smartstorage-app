import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Constants from 'expo-constants';


export const Container = styled.View`
    flex: 1;
`;

export const Head = styled.View`
    width: 100%;
    padding: ${Constants.statusBarHeight + 8}px 24px 0;
`;

export const Header = styled.View`
    flex: 1;
    padding: 0 28px;
`;

export const ImageBackground = styled.ImageBackground`
    width: 100%;
    height: 52%;
    padding-bottom: 12px;
`;

export const T1 = styled.Text`
    font-family: 'Ubuntu_700Bold';
    font-size: 38px;
    color: white;
    padding: 0 18px;
`;

export const T2 = styled.Text`
    font-family: 'Ubuntu_700Bold';
    font-size: 28px;
    color: #282828;
    flex: 1;
`;

export const T3 = styled.Text`
    font-family: 'Ubuntu_700Bold';
    font-size: 20px;
    color: #3A3A3A;
    flex: 1;
`;

export const Text = styled.Text`
    font-family: 'Roboto_400Regular';
    font-size: 16px;
    color: #797979;
`;

export const InputContainer = styled.View`
    width: 100%;
    height: 50px;
    background: white;
    flex-direction: row;
    border-radius: 12px;
    margin-top: 12px;
    margin-bottom: 8px;
`;

export const TextInput = styled.TextInput`
    flex: 1;
    padding: 0 16px;
    
    font-family: 'Roboto_400Regular';
    font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
    width: 48px;
    justify-content: center;
    align-items: center;
    background: #008DF4;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
`;



export const Body = styled.View`
    background: white;
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
    padding: 16px 0 0;

    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 54%;
`;

export const AddButton = styled.TouchableOpacity``;

