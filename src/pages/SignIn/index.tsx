import React, { useCallback, useRef } from 'react';
import { Feather as Icon, FontAwesome5 as FaIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, KeyboardAvoidingView, Platform, ScrollView, TextInput } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { Container, Title, Button, CreateAccountButton, CreateAccountButtonText, BackButton } from './styles';
import Input from '../../components/Input';

const SignIn: React.FC = () => {
    // useRef cria uma ref para manipular um elemento diretamente
    // Refs servem para manipularmos um elemento diretamente
    // FormHandles => Tipagem do form => métodos disponíveis para o form
    const formRef = useRef<FormHandles>(null);
    const passwordRef = useRef<TextInput>(null);
    const navigation = useNavigation();

    const handleSignIn = useCallback((data: object) => {
        console.log(data);
    }, []);

    return(
        <>
            <KeyboardAvoidingView 
                style={{ flex: 1 }} 
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled
            >
                {/* keyboardShoulPersistTaps significa se o teclado deve ficar ao clicar fora dele */}
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{ flex: 1 }}
                >
                    <Container>
                        <BackButton onPress={() => navigation.goBack()}>
                            <Icon 
                                name="arrow-left"
                                size={30}
                                color="#008DF4"
                            />
                        </BackButton>

                        <View>
                            <Title>Bem vindo!</Title>
                        </View>

                        {/* Inputs */}

                        <Form ref={formRef} onSubmit={handleSignIn}>
                            <Input 
                                name="email"
                                label="Email"
                                placeholder="janedoe@email.com"
                                autoCorrect={false}
                                autoCapitalize="none"
                                keyboardType="email-address"
                                returnKeyType="next"
                                onSubmitEditing={() => {

                                }}
                            />
                            
                            <Input 
                                ref={passwordRef}
                                name="password"
                                label="Senha"
                                placeholder="********"
                                secureTextEntry
                                returnKeyType="send"
                                onSubmitEditing={() => formRef.current?.submitForm()}
                            />

                            <View style={{width: '100%', alignItems: 'flex-end', marginTop: 16}} >
                                <Button
                                    onPress={() => {
                                        formRef.current?.submitForm();
                                    }}  
                                >
                                    <FaIcons 
                                        name="arrow-right"
                                        size={30}
                                        color="white"
                                    />
                                </Button>
                            </View>

                        </Form>
                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>

            <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
                <Icon 
                    name="log-in"
                    size={24}
                    color="#008DF4"
                />

                <CreateAccountButtonText>
                    Criar uma conta
                </CreateAccountButtonText>
            </CreateAccountButton>
        </>
    );
}

export default SignIn;