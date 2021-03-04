import React from 'react';
import { TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';

import { Container, ImageBackground, Head, Header, Button, InputContainer, TextInput, T1, Body } from './styles';
import Back from '../../assets/backImage.jpg';
import ListItem from '../../components/ListItem';

const ShopList: React.FC = () => {
    const navigation = useNavigation();

    return(
        <Container>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>
            <ImageBackground source={Back} >
                <Head>
                    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                        <Icon 
                            name="bars"
                            size={24}
                            color="#FFFFFF"
                        />
                    </TouchableOpacity>
                </Head>
                <Header>
                    <T1>Lista de compras</T1>
                        
                </Header>
            </ImageBackground>

            <Body>
                <InputContainer>
                    <TextInput placeholder="Pesquisar..."/>
                    <Button>
                        <Icon 
                            name="search"
                            size={20}
                            color="#ffffff"
                        />
                    </Button>
                </InputContainer>
                <ScrollView
                    style={{ flex: 1 }}
                    scrollEnabled
                >
                    <ListItem
                        colors={['#FFE500', '#FFF493']}
                        type="list"
                        title="Macarrão"
                        text="Val: 10/12/2021"
                        qtd={5}
                    />
                </ScrollView>
            </Body>
        </Container>
    );
};

export default ShopList;
