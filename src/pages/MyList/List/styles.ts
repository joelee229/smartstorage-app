import styled from 'styled-components/native';
import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';


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
    padding: 0 12px;
    margin-top: 16px;
`;

export const InputContainer = styled.View`
    width: 100%;
    height: 50px;
    background: #EBEBEB;
    flex-direction: row;
    border-radius: 12px;
    margin-bottom: 16px;
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
    padding: 16px 16px 0;

    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 72%;
`;

export const AddButton = styled.TouchableOpacity`
    position: absolute;
    top: ${Constants.statusBarHeight + 48}px;
    right: 8px;

    background: #FF5C38;
    width: 70px;
    height: 70px;
    border-radius: 35px;

    justify-content: center;
    align-items: center;
`;

export const HiddenButtonContainer = styled(Animatable.View)`
    position: absolute;
    bottom: 72%;
    left: 0;

    padding: 8px 8px;

    flex-direction: row;
    align-items: center;
    background: rgba(0,0,0, 0.45);
    border-top-right-radius: 16px;
`;

export const HiddenButton = styled.TouchableOpacity`
    background: #FABE4D;
    width: 100px;
    height: 56px;
    border-radius: 12px;

    justify-content: center;
    align-items: center;
`;

export const HiddenButtonText = styled.Text`
    font-family: 'Roboto_500Medium';
    font-size: 18px;
    color: white;
`;