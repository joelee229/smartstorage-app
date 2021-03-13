import React, { useRef, useCallback, useState } from 'react';
import { View, KeyboardAvoidingView, Platform, ScrollView, TextInput, Alert } from 'react-native';
import { Feather as Icon, FontAwesome5 as FaIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';
import { Container, Title, Button, BackButton } from './styles';
import Loading from '../../components/Loading';
import { useAuth } from '../../hooks/auth';
import Input from '../../components/Input';
import api from '../../services/api';

interface SignUpProps {
    name: string;
    email:string;
    password: string;
}

const SignUp: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const formRef = useRef<FormHandles>(null);
    const emailInputRef = useRef<TextInput>(null);
    const passwordInputRef = useRef<TextInput>(null);
    const navigation = useNavigation();

    const handleSignUp = useCallback(async (data: SignUpProps) => {
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
            });
            // console.log(data);

            await schema.validate(data, {
                abortEarly: false,
            });

            // Success validation
            setLoading(true);
            await api.post('user/create', data);

            Alert.alert(
                'Cadastro realizado com sucesso',
                'Você já pode fazer login na aplicação.'
            );

            navigation.goBack();
        } catch(err) {
            if (err instanceof Yup.ValidationError) {
                // Validation failed
                // console.log(err.inner);
                const validationErrors = getValidationErrors(err);

                formRef.current?.setErrors(validationErrors);

                return;
            }

            console.log(JSON.stringify(err));
            Alert.alert(
                "Erro na autenticação",
                "Ocorreu um erro ao fazer o cadastro, cheque as credenciais",
            );
        } finally {
            setLoading(false);
        }
        // console.log(data);
    }, [navigation]);

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
                                autoCapitalize="none"
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