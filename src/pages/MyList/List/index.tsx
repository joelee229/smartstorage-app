import React, { useCallback, useState, useMemo, useEffect } from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
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
    HiddenButtonText
 } from './styles';
import Back from '../../../assets/backImage.jpg';
import ProductItem from '../../../components/ProductItem';
import Item from '../../../utils/model/item';

type ParamList = {
    Detail: {
        title: string;
        items: Item[]
    }
}

const List: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute<RouteProp<ParamList, 'Detail'>>();
    const { items, title } = useMemo(() => route.params, [route]);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [newItems, setNewItems] = useState(items);
    const [resetItem, setResetItem] = useState<boolean>(false);


    // useEffect(() => {
    //     setNewItems(items);
    // }, []);


    const handleEditingChange = useCallback((itemId: string, newVal: number) => {
        if(!isEditing){
            setIsEditing(true);
        }

        // Busca o item em específico no array
        const changedItem = newItems.find(item => item.id === itemId);

        // Altera o atributo qtd como queremos
        if(changedItem){
            changedItem.qtd = newVal;
        }

        // Meio que copia e junta tudo em um novo array
        // const prodItems = Object.assign([], items, changedItem);

        // Realoca esse novo array no state
        // Por algum motivo aqui ele altera o context
        setNewItems((prevItems) => Object.assign([], prevItems, changedItem));

    }, [isEditing]);

    const handleHiddenButtonCancel = useCallback(() => {
        setNewItems(items);
        console.log("Items de route: ", items);
        console.log("Items do state: ", newItems);
        setIsEditing(false);
    }, []);

    const handleHiddenButtonSubmit = useCallback(() => {
        console.log("Items: ",newItems);

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
                    <T1>aaaaaaaaaaaaaaa</T1>      
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
                    {newItems.map(item => (
                        <ProductItem
                            key={item.id}
                            item={item}
                            onChange={handleEditingChange}
                            isEditing={isEditing}
                            listName="Default"
                            resetItem={resetItem}
                            reset={(re) => setResetItem(!re)}
                        />
                    ))}
                </ScrollView>
            </Body>

            {/* Adicionar item nessa lista em específico */}
            <AddButton onPress={() => navigation.navigate('AddItem')}>
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