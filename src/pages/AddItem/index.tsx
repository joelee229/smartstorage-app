import React, { useCallback, useState } from 'react';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { TouchableOpacity, StatusBar, View, KeyboardAvoidingView, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';

import { Container, Head, Title, Body, PickerButton, Text, Label, Select } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const AddItem: React.FC = () => {
    const [selectedType, setSelectedType] = useState<string>();
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState<boolean>(false);
    const navigation = useNavigation();

    const handleSubmit = useCallback(() => {}, []);

    const handleDatePickerChange = useCallback((e, selectedDate) => {
        setShow(Platform.OS === 'ios');
        setDate(selectedDate);
    }, []);

    const handleSelectChange = useCallback((item, i) => {
        setSelectedType(item);
    }, []);

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

                                {/* <View style={{ flex: 1 }}>
                                    <Input 
                                        label="Validade"
                                        name="validity"
                                        placeholder="dd/mm/aaaa"
                                        autoCapitalize="words"
                                        autoCorrect={false}
                                    />
                                </View> */}

                                <View style={{ flex: 1 }}>
                                    <Label>Validade</Label>
                                    <PickerButton onPress={() => setShow(true)}>
                                        <Text>{date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()}</Text>
                                    </PickerButton>
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
                            </View>

                            {/* Cód de barra */}
                            <Button color="#008DF4">
                                Adicionar
                            </Button>
                        </Form>
                    </Body>
                    
                    {show && 
                        <DateTimePicker
                            testID="DatePicker"
                            value={date}
                            mode='date'
                            display='default'
                            onChange={handleDatePickerChange}
                        />
                    }
                
            </Container>
        </KeyboardAvoidingView>
    );
};

export default AddItem;
