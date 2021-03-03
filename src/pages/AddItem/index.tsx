import React, { useCallback } from 'react';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { TouchableOpacity, StatusBar, View, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';

import { Container, Head, Title, Body } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const AddItem: React.FC = () => {
    const navigation = useNavigation();

    const handleSubmit = useCallback(() => {}, []);

    return(
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding': 'height'}
            style={{ flex: 1, paddingBottom: 150 }}
            enabled 
        >
            <Container>
                <StatusBar  barStyle="dark-content"/>
                
                    <Head>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icon 
                                name="arrow-left"
                                size={30}
                                color="#008DF4"
                            />
                        </TouchableOpacity>
                    </Head>

                    <Body>
                        <Title>Adicionar item</Title>
                        <Form onSubmit={handleSubmit}>
                            {/* <View style={{ flexDirection: 'row' }}> */}
                                <Input 
                                    label="Nome do item"
                                    name="title"
                                    placeholder="Ex: Arroz 5kg"
                                    keyboardType="email-address"
                                    autoCapitalize="words"
                                    autoCorrect={false}
                                />
                            {/* </View> */}

                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 1 }}>
                                    <Input 
                                        label="Quantidade"
                                        name="qtd"
                                        placeholder="1"
                                        keyboardType="number-pad"
                                    />
                                </View>

                                <View style={{marginHorizontal: 8}}></View>

                                <View style={{ flex: 1 }}>
                                    <Input 
                                        label="Validade"
                                        name="validity"
                                        placeholder="dd/mm/aaaa"
                                        autoCapitalize="words"
                                        autoCorrect={false}
                                    />
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 1 }}>
                                    <Input 
                                        label="Marca/Empresa"
                                        name="brand"
                                        placeholder="Ex: Tupiniquim"
                                        keyboardType="email-address"
                                        autoCapitalize="words"
                                        autoCorrect={false}
                                    />
                                </View>
                                <View style={{marginHorizontal: 8}}></View>

                                {/* Select */}
                                <View style={{ flex: 1 }}>
                                    <Input 
                                        label="Tipo"
                                        name="type"
                                        placeholder="Essencial"
                                        keyboardType="email-address"
                                    />
                                </View>
                            </View>

                            {/* Cód de barra */}
                            <Button color="#008DF4">
                                Adicionar
                            </Button>
                        </Form>
                    </Body>
                
            </Container>
        </KeyboardAvoidingView>
    );
};

export default AddItem;
