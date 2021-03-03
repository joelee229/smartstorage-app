import React, { useState, useEffect } from 'react';
import { StatusBar, ScrollView, KeyboardAvoidingView, Platform, View, TouchableOpacity } from 'react-native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Back from '../../assets/backImage.jpg';


import { 
    Container, 
    T1, 
    T2, 
    T3, 
    InputContainer, 
    TextInput, 
    Button, 
    Header, 
    Body, 
    AddButton, 
    ImageBackground,
    Text,
    Head 
} from './styles';
import ListItem from '../../components/ListItem';
import AddItem from '../AddItem';

const Stack = createStackNavigator();

const HomeRoutes: React.FC = () => {

    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: '#fdfdfd'
                },
                gestureDirection: "horizontal",
                gestureEnabled: false,
                cardStyleInterpolator:
                CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <Stack.Screen name="Home"  component={Home}/>
            <Stack.Screen name="AddItem"  component={AddItem}/>
        </Stack.Navigator>
    );
};

const Home: React.FC = () => {
    const navigation = useNavigation();
    // TODO: Botão escondido que só vai aparecer durante a edição das qtds dos alimentos
    // '' Quando tocado executa um requisição de atualização do estado(alimentos) enviando como corpo
    // O estado vai ser alterado com o(s) número(s) de mudança e seu index

    // O estado criado pelo search tem que substituir os cards atuais
    // TODO: Nested ScrollView issue

    return(
        <Container>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>
            {/* <KeyboardAvoidingView enabled={false} style={{flex: 1}} behavior={Platform.OS === "ios" ? "padding" : undefined } > */}
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
                        <T1>Acompanhe seus alimentos</T1>
                        <InputContainer>
                            <TextInput
                                placeholder="Pesquisar..."
                            />
                            <Button>
                                <Icon 
                                    name="search"
                                    size={20}
                                    color="#ffffff"
                                />
                            </Button>
                        </InputContainer>
                    </Header>
                </ImageBackground>

                
                <Body>
                    <ScrollView style={{ flex:1, paddingHorizontal: 24 }}>
                        <View style={{ alignItems: 'center', flexDirection: 'row', flex: 1, marginBottom: 8 }}>
                            <T2>Recentes</T2>
                            <TouchableOpacity>
                                <Text>Ver mais</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView 
                            horizontal
                            contentContainerStyle={{ flex: 1, paddingVertical: 8 }}
                            nestedScrollEnabled = {true}
                            scrollEnabled
                        >
                            <ListItem
                                colors={['#FF3840', '#FF878C']}
                                title="Macarrão"
                                text="Val: 10/12/2021"
                                qtd={5}
                            />

                            <ListItem
                                colors={['#FFAB41', '#FFCE90']}
                                title="Macarrão"
                                text="Val: 10/12/2021"
                                qtd={5}
                            />

                            <ListItem
                                colors={['#FFE500', '#FFF493']}
                                title="Macarrão"
                                text="Val: 10/12/2021"
                                qtd={5}
                            />

                            <ListItem
                                colors={['#71CB32', '#BCEA9D']}
                                title="Macarrão"
                                text="Val: 10/12/2021"
                                qtd={5}
                            /> 
                        </ScrollView>
                        
                        <View style={{ alignItems: 'center', flexDirection: 'row', flex: 1, marginBottom: 8 }}>
                            <T3>Preste a vencer</T3>
                            <TouchableOpacity>
                                <Text>Ver mais</Text>
                            </TouchableOpacity>
                        </View>

                        <ScrollView 
                            horizontal
                            contentContainerStyle={{ flex: 1, paddingVertical: 8 }}
                            nestedScrollEnabled = {true}
                            scrollEnabled
                        >
                            <ListItem
                                colors={['#FFAB41', '#FFCE90']}
                                title="Macarrão"
                                text="Val: 10/12/2021"
                                qtd={5}
                            /> 
                        </ScrollView>
                        
                        <View style={{ alignItems: 'center', flexDirection: 'row', flex: 1, marginBottom: 8 }}>
                            <T3>Listas personalizadas</T3>
                            <TouchableOpacity>
                                <Text>Ver mais</Text>
                            </TouchableOpacity>
                        </View>

                        <ScrollView 
                            horizontal
                            contentContainerStyle={{ flex: 1, paddingVertical: 8 }}
                            nestedScrollEnabled = {true}
                            scrollEnabled
                        >
                            <ListItem
                                colors={['#71CB32', '#BCEA9D']}
                                title="Macarrão"
                                text="Val: 10/12/2021"
                                qtd={5}
                            /> 
                        </ScrollView>
                    </ScrollView>
                </Body>

                <AddButton onPress={() => navigation.navigate('AddItem')}>
                    <Icon 
                        name="plus"
                        size={40}
                        color="white"
                    />
                </AddButton>
            {/* </KeyboardAvoidingView> */}
        </Container>
    );
};

export default HomeRoutes;
