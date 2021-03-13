import React from 'react';
import { StatusBar, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';

import { Container, ImageBackground, Head, Body, Title, Name, Header, Button, ButtonText } from './styles';
import Back from '../../assets/backApp.jpg';
import { useAuth } from '../../hooks/auth';

const Profile: React.FC = () => {
    const { user } = useAuth();
    const navigation = useNavigation();

    return(
        <Container>
            <StatusBar barStyle="dark-content" />
            <ImageBackground source={Back}>
                <Head>
                    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                        <Icon 
                            name="bars"
                            size={30}
                            color="#008DF4"
                        />
                    </TouchableOpacity>
                    
                    <Title>Seu perfil</Title>
                </Head>

                <Header>
                    <Name>{user?.name}</Name>
                </Header>

                <Body>
                    <Button>
                        <Icon  
                            name="cog"
                            size={24}
                            color="#9F9F9F"
                        />

                        <ButtonText>Configurações</ButtonText>
                    </Button>
                    <View style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: 'rgba(0, 0, 0, 0.25)' }} />
                    <Button>
                        <Icon  
                            name="clock"
                            size={24}
                            color="#9F9F9F"
                        />

                        <ButtonText>Histórico de compras</ButtonText>
                    </Button>

                    <View style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: 'rgba(0, 0, 0, 0.25)' }} />
                    <Button>
                        <Icon  
                            name="question-circle"
                            size={24}
                            color="#9F9F9F"
                        />

                        <ButtonText>Suporte</ButtonText>
                    </Button>

                    <View style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: 'rgba(0, 0, 0, 0.25)' }} />
                    <Button>
                        <Icon  
                            name="money-bill-alt"
                            size={24}
                            color="#9F9F9F"
                        />

                        <ButtonText>Planos de assinatura</ButtonText>
                    </Button>
                </Body>
            </ImageBackground>
        </Container>
    );
};

export default Profile;
