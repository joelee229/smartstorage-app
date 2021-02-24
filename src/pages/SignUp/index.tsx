import React, { useRef } from 'react';
import { Feather as Icon, FontAwesome5 as FaIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, KeyboardAvoidingView, Platform, ScrollView, TextInput } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { Container, Title, Button, BackButton } from './styles';
import Input from '../../components/Input';

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const emailInputRef = useRef<TextInput>(null);
    const passwordInputRef = useRef<TextInput>(null);
    const navigation = useNavigation();


    return(
        <>
            <KeyboardAvoidingView 
                style={{ flex: 1 }} 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
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
                            <Title>Criar conta</Title>
                        </View>

                        {/* Inputs */}
                        <Form
                            ref={formRef} 
                            onSubmit={(data) => {
                                console.log(data);
                            }}
                        >
                            <Input 
                                name="name"
                                label="Nome"
                                placeholder="Jane Doe"
                                autoCapitalize="words"
                                returnKeyType="next"
                                onSubmitEditing={() => emailInputRef.current?.focus()}
                            />

                            <Input 
                                ref={emailInputRef}
                                name="email"
                                label="Email"
                                placeholder="janedoe@email.com"
                                keyboardType="email-address"
                                autoCorrect={false}
                                autoCapitalize="none"
                                returnKeyType="next"
                                onSubmitEditing={() => passwordInputRef.current?.focus()}
                            />
                            
                            <Input 
                                ref={passwordInputRef}
                                name="password"
                                label="Senha"
                                placeholder="********"
                                secureTextEntry
                                textContentType="newPassword"
                                returnKeyType="send"
                                onSubmitEditing={() => formRef.current?.submitForm()}
                            />
                        </Form>

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
                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>
        </>
    );
}

export default SignUp;