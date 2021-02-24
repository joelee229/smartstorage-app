import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Constants from 'expo-constants';


export const Container = styled.View`
    flex: 1;
    justify-content: center;
    padding: ${8 + Constants.statusBarHeight}px 32px ${Platform.OS === 'android' ? 140 : 40}px;
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
