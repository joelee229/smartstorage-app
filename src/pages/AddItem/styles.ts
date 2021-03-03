import Constants from 'expo-constants';
import styled from 'styled-components/native';

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