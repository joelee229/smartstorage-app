import React from 'react';
import { TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

import { Container, ImageBackground, Head, Title, Body, Text } from './styles';
import Term from './text';
import Back from '../../assets/backApp.jpg';

const Terms: React.FC = () => {
    const navigation = useNavigation();

    return(
        <Container>
            <StatusBar barStyle="dark-content" />
            {/* <ImageBackground source={Back}> */}
                <Head>
                    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())} >
                        <Icon 
                            name="bars"
                            size={30}
                            color="#008DF4"
                        />
                    </TouchableOpacity>
                </Head>

                <Body>
                    <ScrollView style={{ flex: 1, paddingBottom: 16 }} >
                        <Title>Termos de Uso e serviços</Title>
                        <Text>{Term}</Text>
                    </ScrollView>
                </Body>
            {/* </ImageBackground> */}
        </Container>
    );
};

export default Terms;
