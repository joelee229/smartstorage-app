import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';


export const Container = styled.View`
    flex: 1;
    justify-content: center;
    padding: ${8 + Constants.statusBarHeight}px 32px ${Platform.OS === 'android' ? 180 : 40}px;
`;

export const Title = styled.Text`
    font-family: 'Ubuntu_700Bold';
    font-size: 32px;
    color: #008DF4;
    margin: 16px 0;
`;

export const BackButton = styled.TouchableOpacity`
    padding: 1px;
    border-radius: 100px;
`;

export const Header = styled.View``;

export const Button = styled.TouchableOpacity`
    background: #FABE4D;
    width: 64px;
    height: 64px;
    border-radius: 32px;
    
    justify-content: center;
    align-items: center;

`;

export const CreateAccountButton = styled.TouchableOpacity`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-top-width: 1px;
    border-color: rgba(0, 0, 0, 0.15);
    padding: 16px 0 ${16 + getBottomSpace()}px;
    background: #fdfdfd;

    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
    font-family: 'Roboto_500Medium';
    font-size: 16px;
    color: #008DF4;
    margin-left: 12px;
`;