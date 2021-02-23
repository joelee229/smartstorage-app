import React from 'react';
// import { RectButtonProperties } from 'react-native-gesture-handler';
import { TouchableOpacityProps } from 'react-native';

import { Container, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    children: string;
    filled?: boolean;
}

const Button: React.FC<ButtonProps> = ({children, filled = false, ...rest}) => {

    return (
        <Container {...rest} filled={filled}>
            <ButtonText filled={filled}>
                {children}
            </ButtonText>
        </Container>
    );
};

export default Button;