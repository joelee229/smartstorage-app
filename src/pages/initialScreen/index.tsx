import React from 'react';
import { Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container,  } from './styles';
import Woman from '../../assets/woman.png';
import Logo from '../../assets/logo.png';
import Button from '../../components/Button';

const InitialScreen: React.FC = () => {
    const navigation = useNavigation();

    return (
        <Container>
            {/* TODO: Redimensionar de uma forma correta */}
            <Image style={{width: 180, height: 120, marginTop: 16}} source={Logo} />
            <Image style={{width: 200, height: 245.5, marginTop: 16}} source={Woman} />

            <Button onPress={() => navigation.navigate('SignIn')} filled={true}>
                Logon
            </Button>

            <Button onPress={() => navigation.navigate('SignUp')}>
                Cadastrar-se
            </Button>
        </Container>
    );
}

export default InitialScreen;