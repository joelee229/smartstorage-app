import React, { useCallback, useState, useRef } from 'react';
import { 
    TouchableOpacity, 
    StatusBar, 
    View, 
    KeyboardAvoidingView, 
    Platform, 
    Alert } from 'react-native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';
import { Container, Head, Title, Body, Select, Label } from './styles';
import Loading from '../../components/Loading';
import Button from '../../components/Button';
import Input from '../../components/Input';
import api from '../../services/api';


const AddItem: React.FC = () => {
    const [colorSelectedType, setColorSelectedType] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);
    const formRef = useRef<FormHandles>(null);

    const navigation = useNavigation();

    const handleColorSelectChange = useCallback((item, i) => {
        setColorSelectedType(item);
    }, []);

    const handleSubmit = useCallback(async (data: object) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                title: Yup.string()
                    .required('Título obrigatório')       
            });

            await schema.validate(data, {
                abortEarly: false
            });

            // Success Validation
            setLoading(true);
            // TODO: Lógica para atualizar a lista do user
            // await api.post('/list/create', {
            //     ...data,
            //     colorType: colorSelectedType
            // });

            Alert.alert(
                "Adicionado com sucesso"
            );
        } catch(err) {
            if(err instanceof Yup.ValidationError){
                // Validation failed
                const validationErrors = getValidationErrors(err);

                formRef.current?.setErrors(validationErrors);

                return;
            }

            // Se for qualquer outro erro
            Alert.alert(
                "Erro na autenticação",
                "Ocorreu um erro ao fazer login, cheque as credenciais"
            );
        } finally {
            setLoading(false);
        }

    }, [colorSelectedType]);

    if(loading){
        return <Loading />;
    }

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
                    <Title>Adicionar lista</Title>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <Input 
                            label="Nome da lista"
                            name="title"
                            placeholder="Ex: Dispensa"
                            keyboardType="default"
                            autoCapitalize="words"
                        />

                        <View>
                            <Label>Cor da lista</Label>
                            <Select>
                                <Picker
                                    selectedValue={colorSelectedType}
                                    onValueChange={handleColorSelectChange}
                                    style={{ flex: 1 }}
                                >
                                    <Picker.Item label="Vermelho" value="Vermelho" />
                                    <Picker.Item label="Laranja" value="Laranja" />
                                    <Picker.Item label="Amarelo" value="Amarelo" />
                                    <Picker.Item label="Verde" value="Verde" />
                                </Picker>
                            </Select>
                        </View>

                        {/* Cód de barra */}

                        <Button color="#008DF4" onPress={() => formRef.current?.submitForm()}>
                            Adicionar
                        </Button>
                    </Form>
                </Body>
            </Container>
        </KeyboardAvoidingView>
    );
};

export default AddItem;
