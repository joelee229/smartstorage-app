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
    font-size: 24px;
    color: #008DF4;
    margin-left: 16px;
`;

export const Header = styled.View`
    width: 100%;
    padding: 8px 24px;
`;

export const Name = styled.Text`
    font-family: 'Ubuntu_700Bold';
    font-size: 24px;
    color: black;
    margin: 16px 0;
`;

export const Body = styled.View`
    flex: 1;
    padding: 8px 24px;
`;

export const Button = styled.TouchableOpacity`
    width: 100%;
    height: 56px;

    flex-direction: row;
    align-items: center;
`;
export const ButtonText = styled.Text`
    font-family: 'Roboto_400Regular';
    font-size: 20px;
    color: #9F9F9F;
    margin-left: 16px;
`;