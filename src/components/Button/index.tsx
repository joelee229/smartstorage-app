import React from 'react';
// import { RectButtonProperties } from 'react-native-gesture-handler';
import { TouchableOpacityProps } from 'react-native';

import { Container, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    children: string;
    filled?: boolean;
    color?: string;
}

const Button: React.FC<ButtonProps> = ({children, filled = false, color='',...rest}) => {

    return (
        <Container {...rest} filled={filled} color={color}>
            <ButtonText filled={filled}>
                {children}
            </ButtonText>
        </Container>
    );
};

export default Button;