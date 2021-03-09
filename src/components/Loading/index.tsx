import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './styles';

const Loading: React.FC = () => {

    return(
        <Container>
            <ActivityIndicator 
                size='large'
                color='#008DF4'
            />
        </Container>
    );
};

export default Loading;

