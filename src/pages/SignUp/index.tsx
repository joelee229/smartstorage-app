import React, { useRef, useCallback } from 'react';
import { Feather as Icon, FontAwesome5 as FaIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, KeyboardAvoidingView, Platform, ScrollView, TextInput, Alert } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { Container, Title, Button, BackButton } from './styles';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErrors';

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const emailInputRef = useRef<TextInput>(null);
    const passwordInputRef = useRef<TextInput>(null);
    const navigation = useNavigation();

    const handleSignUp = useCallback(async (data: object) => {
        try {
            formRef.current?.setErrors({});
            // Criar um schema para o data que está vindo
            const schema = Yup.object().shape({
                name: Yup.string()
                    .required("Nome obrigatório"),
                email: Yup.string()
                    .email("Email inválido")
                    .required("Email obrigatório"),
                password: Yup.string()
                    .min(8, "No mínimo 8 caractéres")
                    .matches(
                        /^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/,
                        "A senha deve conter no letras maiúsculas, minúsculas e números"
                    ),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            // Success validation
        } catch(err) {
            if (err instanceof Yup.ValidationError) {
                // Validation failed
                // console.log(err.inner);
                const validationErrors = getValidationErrors(err);

                formRef.current?.setErrors(validationErrors);

                // Alert.alert(
                //     "Erro na autenticação",
                //     "Ocorreu um erro ao fazer login, cheque as credenciais"
                // );

                return;
            }
        }
        // console.log(data);
    }, []);


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
                            onSubmit={handleSignUp}
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