import React, { useCallback, useRef } from 'react';
import { View, KeyboardAvoidingView, Platform, ScrollView, TextInput, Alert } from 'react-native';
import { Feather as Icon, FontAwesome5 as FaIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';

import { Container, Title, Button, CreateAccountButton, CreateAccountButtonText, BackButton } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import Loading from '../../components/Loading';
import { useAuth } from '../../hooks/auth';
import Input from '../../components/Input';

interface SignInProps {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    // useRef cria uma ref para manipular um elemento diretamente
    // Refs servem para manipularmos um elemento diretamente
    // FormHandles => Tipagem do form => métodos disponíveis para o form
    const formRef = useRef<FormHandles>(null);
    const passwordRef = useRef<TextInput>(null);
    const navigation = useNavigation();
    const { signIn, loading } = useAuth();

    const handleSignIn = useCallback(async (data: SignInProps) => {
        try {
            // Reseta os erros do Form
            formRef.current?.setErrors({});

            // Criar um schema para o data que está vindo
            const schema = Yup.object().shape({
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

            // Valida o data
            await schema.validate(data, {
                abortEarly: false,
            });

            // Success validation
            // Executa o método signIn do contexto criado
            // await signIn(data);
        } catch(err) {
            // Se o erro pertencer a validação do form
            if (err instanceof Yup.ValidationError) {
                // Validation failed
                // console.log(err.inner);
                const validationErrors = getValidationErrors(err);

                formRef.current?.setErrors(validationErrors);

                return;
            }

            // Se for qualquer outro erro
            Alert.alert(
                "Erro na autenticação",
                "Ocorreu um erro ao fazer login, cheque as credenciais"
            );
        }
    }, []);

    if(loading){
        return <Loading />
    }

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
                                    passwordRef.current?.focus()
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