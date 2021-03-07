import React, { useCallback, useState } from 'react';
import { KeyboardAvoidingView, StatusBar, TouchableOpacity, Platform, View } from 'react-native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { Form } from '@unform/mobile';

import { Container, Head, Title, Body, Text, Label, Select} from './styles';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

const AddList: React.FC = () => {
    const navigation = useNavigation();
    const [selectedType, setSelectedType] = useState<string>();

    const handleSubmit = useCallback(() => {}, []);

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
                        <Title>Criar nova lista</Title>
                        <Form onSubmit={handleSubmit}>
                            <Input 
                                label="Nome da lista"
                                name="title"
                                placeholder="Ex: Lista de doces"
                                keyboardType="default"
                                autoCapitalize="words"
                            />

                            <View >
                                <Label>Cor da lista</Label>
                                <Select>
                                    <Picker
                                        selectedValue={selectedType}
                                        onValueChange={handleSelectChange}
                                        mode='dropdown'
                                        style={{ flex: 1 }}
                                    >
                                        <Picker.Item label="Vermelho" value="Vermelho" />
                                        <Picker.Item label="Laranja" value="Laranja" />
                                        <Picker.Item label="Amarelo" value="Amarelo" />
                                        <Picker.Item label="Verde" value="Verde" />
                                    </Picker>
                                </Select>
                            </View>

                            {/* <View style={{ flexDirection: 'row' }}>
                                <Select>
                                    <Picker
                                        selectedValue={selectedType}
                                        onValueChange={handleSelectChange}
                                        style={{ flex: 1 }}
                                    >
                                        <Picker.Item label="Vermelho" value="Vermelho" />
                                        <Picker.Item label="Laranja" value="Laranja" />
                                        <Picker.Item label="Amarelo" value="Amarelo" />
                                        <Picker.Item label="Verde" value="Verde" />
                                    </Picker>
                                </Select>

                                <View style={{marginHorizontal: 8}}></View>

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
                            </View> */}

                            {/* Cód de barra */}

                            <Button color="#008DF4">
                                Criar
                            </Button>
                        </Form>
                    </Body>
            </Container>
        </KeyboardAvoidingView>
    );
};

export default AddList;