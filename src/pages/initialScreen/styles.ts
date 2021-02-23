import styled from 'styled-components/native';
import { ImageProps } from 'react-native';
import LogoM from '../../assets/logo.png';

interface LogoProps extends ImageProps {

}

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
`;

export const Image = styled.Image`
    
`;

// export const Logo  = styled<ImageProps>(LogoM)`
//     width: 64px;
// `;


