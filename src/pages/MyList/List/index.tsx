import React, { useCallback, useState, useMemo, useEffect } from 'react';
import { TouchableOpacity, ScrollView, Alert } from 'react-native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

import { 
    Container, 
    ImageBackground, 
    Head, 
    Header, 
    T1, 
    Button, 
    AddButton, 
    Body, 
    InputContainer, 
    TextInput,
    HiddenButtonContainer,
    HiddenButton,
    HiddenButtonText,
    Text
 } from './styles';
import Back from '../../../assets/backImage.jpg';
import ProductItem from '../../../components/ProductItem';
import Item from '../../../utils/model/item';
import api from '../../../services/api';

type ParamList = {
    Detail: {
        title: string;
        // items: Item[]
        id_list: string;
    }
}

const List: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute<RouteProp<ParamList, 'Detail'>>();
    const { id_list, title } = useMemo(() => route.params, [route]);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [newItems, setNewItems] = useState<Item[] | null>(null);
    let alteredItems = [] as Item[];
    // TODO: Array state de items em edição
    // Ae se o user apertar em enviar manda esse array e outras info
    // Senão achar uma forma de resetar tudo


    useEffect(() => {
        async function loaditems() {
            const response = await api.get('item/getItens', {
                params: {
                    id_list
                }
            });

            // if(!response.data.lenght){
            //     console.log('entrei');
            //     setNewItems(null);
            // } else {
            //     setNewItems(response.data);
            // }

            setNewItems(response.data);
       }

       loaditems();
    }, []);

    const refreshItems = useCallback(async () => {
        const response = await api.get('item/getItens', {
            params: {
                id_list
            }
        });

        // console.log(response.data.length);

        // if(!response.data.lenght){
        //     console.log('entrei');
        //     setNewItems(null);
        // } else {
        //     setNewItems(response.data);
        // }

        setNewItems(response.data);
    }, [newItems]);


    const handleEditingChange = useCallback((itemId: string, newVal: number, listName: string) => {
        if(!isEditing){
            setIsEditing(true);
        }

        // Busca o item em específico no array
        const changedItem = newItems?.find(item => item._id === itemId);

        // Altera o atributo qtd como queremos
        if(changedItem){
            changedItem.quantity = newVal;
        }

        // Meio que copia e junta tudo em um novo array
        const items = Object.assign([], newItems, changedItem);
        alteredItems.push(items);

        // Realoca esse novo array no state
        // Por algum motivo aqui ele altera o context
        // setProductItems((prevItems) => Object.assign([], prevItems, changedItem));

    }, [isEditing, newItems]);
    const handleHiddenButtonCancel = useCallback(() => {
        // setNewItems(null);
        refreshItems();        
        // console.log("Lista do context", user?.lists[0].items);
        // console.log("Lista do state", productItems);
        setIsEditing(false);
    }, []);

    const handleHiddenButtonSubmit = useCallback(() => {
        Alert.alert("Atualizado com sucesso");

        // TODO: Mandar esse array alterado para o context
        // updateItem()
    }, []);

    return(
        <Container>
            <ImageBackground source={Back} >
                <Head>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon 
                            name="arrow-left"
                            size={24}
                            color="#FFFFFF"
                        />
                    </TouchableOpacity>
                </Head>
                <Header>
                    <T1>{title}</T1>      
                </Header>
            </ImageBackground>

            <Body>
                <InputContainer>
                    <TextInput placeholder="Pesquisar..."/>
                    <Button>
                        <Icon 
                            name="search"
                            size={20}
                            color="#ffffff"
                        />
                    </Button>
                </InputContainer>
                <ScrollView
                    style={{ flex: 1 }}
                    scrollEnabled
                >
                    {newItems ? (
                        newItems.map(item => (
                            <ProductItem
                                key={item._id}
                                item={item}
                                onChange={handleEditingChange}
                                isEditing={isEditing}
                                listName="Default"
                            />
                        ))
                    ) : null}
                    {!newItems?.length && <Text>Essa lista não possui itens</Text>}
                </ScrollView>
            </Body>

            {/* Adicionar item nessa lista em específico */}
            <AddButton onPress={() => navigation.navigate('AddItem', {id_list, title: 'Default'})}>
                <Icon 
                    name="plus"
                    size={40}
                    color="white"
                />
            </AddButton>

            {
                isEditing &&
                <HiddenButtonContainer animation="bounceInLeft" duration={200}>
                    <HiddenButton onPress={handleHiddenButtonCancel} style={{ marginRight: 16 }}>
                        <HiddenButtonText>Cancelar</HiddenButtonText>
                    </HiddenButton>

                    <HiddenButton onPress={handleHiddenButtonSubmit}>
                        <HiddenButtonText>Enviar</HiddenButtonText>
                    </HiddenButton>
                </HiddenButtonContainer>
            }
        </Container>
    );
};

export default List;