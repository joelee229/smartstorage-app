import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
    flex: 1;
`;

export const Head = styled.View`
    width: 100%;
    padding: ${Constants.statusBarHeight + 8}px 24px 0;
`;

export const Title = styled.Text`
    font-family: 'Ubuntu_700Bold';
    font-size: 32px;
    color: #282828;
    padding: 16px 8px;
`;

export const Body = styled.View`
    flex: 1;
    padding: 0 24px;
`;

export const Text = styled.Text`
    color: #666666;
    font-size: 16px;
    font-family: 'Roboto_400Regular';
`;

export const Label = styled.Text`
    margin-top: 8px;
    font-family: 'Ubuntu_700Bold';
    font-size: 14px;
`;

export const Select = styled.View`
    height: 54px;
    border-width: 1px;
    border-color: rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    justify-content: center;
    padding: 0 4px;
    margin-top: 8px;
`;