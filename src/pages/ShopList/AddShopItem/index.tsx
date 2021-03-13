import React, { useCallback, useState, useRef } from 'react';
import { TouchableOpacity, StatusBar, View, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';

import { Container, Head, Title, Body, PickerButton, Text, Label, Select } from './styles';
import getValidationErrors from '../../../utils/getValidationErrors';
import Loading from '../../../components/Loading';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import api from '../../../services/api';

interface ItemProps {
    name: string;
	brand: string;
	qtd: number;
}


const AddShopItem: React.FC = () => {
    const [selectedType, setSelectedType] = useState<string>();
    const [loading, setLoading] = useState(false);
    const formRef = useRef<FormHandles>(null);

    const navigation = useNavigation();


    const handleSubmit = useCallback(async (data: ItemProps) => {
        // TODO: Pegar o id ou title da lista nos parâmetros da rota
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                name: Yup.string()
                    .required('Nome obrigatório'),
                qtd: Yup.number()
                    .required('Quantidade obrigatória'),
                brand: Yup.string()
                    .required('Marca obrigatória')
                    
            });

            await schema.validate(data, {
                abortEarly: false
            });

            // Success Validation
            setLoading(true);
            // TODO: Lógica para adicionar esse item no state do contexto
            // await api.post('/item/create', {
            //     ...data,
            //     type: selectedType,
            // });

            Alert.alert(
                "Adicionado com sucesso"
            );

            navigation.goBack();
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

    }, [navigation, selectedType]);


    const handleSelectChange = useCallback((item, i) => {
        setSelectedType(item);
    }, []);

    if(loading){
        return <Loading />
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
                        <Title>Adicionar item</Title>
                        <Form ref={formRef} onSubmit={handleSubmit}>
                            <Input 
                                label="Nome do item"
                                name="name"
                                placeholder="Ex: Arroz 5kg"
                                keyboardType="default"
                                autoCapitalize="words"
                            />

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
                                        label="Marca/Empresa"
                                        name="brand"
                                        placeholder="Ex: Tupiniquim"
                                        keyboardType="default"
                                        autoCapitalize="words"
                                    />
                                </View>
                            </View>
                            {/* Select */}
                            <View >
                                <Label>Tipo</Label>
                                <Select >
                                    <Picker
                                        selectedValue={selectedType}
                                        onValueChange={handleSelectChange}
                                        style={{ flex: 1 }}
                                    >
                                        <Picker.Item label="Óleos e gorduras" value="Óleos e gorduras" />
                                        <Picker.Item label="Açúcares e Doces" value="Açúcares e Doces" />
                                        <Picker.Item label="Leite, Queijo, Íorgute" value="Leite, Queijo, Íorgute" />
                                        <Picker.Item label="Carnes e Ovos" value="Carnes e Ovos" />
                                        <Picker.Item label="Feijões e Oleaginosas" value="Feijões e Oleaginosas" />
                                        <Picker.Item label="Legumes e Verduras" value="Legumes e Verduras" />
                                        <Picker.Item label="Frutas" value="Frutas" />
                                        <Picker.Item label="Arroz, Pão, Massa, Mandioca" value="Arroz, Pão, Massa, Mandioca" />
                                    </Picker>
                                </Select>
                            </View>

                            {/* Cód de barra */}

                            <Button color="#008DF4" onPress={() => formRef.current?.submitForm()} >
                                Adicionar
                            </Button>
                        </Form>
                    </Body>
            </Container>
        </KeyboardAvoidingView>
    );
};

export default AddShopItem;
