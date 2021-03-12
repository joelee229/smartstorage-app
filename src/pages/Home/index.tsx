import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
    StatusBar, 
    ScrollView, 
    KeyboardAvoidingView, 
    Platform, 
    View, 
    TouchableOpacity,
    FlatList
} from 'react-native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Back from '../../assets/backImage.jpg';


import { 
    Container, 
    T1, 
    T2, 
    T3, 
    InputContainer, 
    TextInput, 
    Button, 
    Header, 
    Body, 
    AddButton, 
    ImageBackground,
    Text,
    Head,
    HiddenButtonContainer,
    HiddenButton,
    HiddenButtonText
} from './styles';
import ProductItem from '../../components/ProductItem';
import AddItem from '../AddItem';
import { useAuth } from '../../hooks/auth';
import Item from '../../utils/model/item';
import List from '../../utils/model/list';
import { example } from '../../services/api';

const Stack = createStackNavigator();

const HomeRoutes: React.FC = () => {

    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: '#fdfdfd'
                },
                gestureDirection: "horizontal",
                gestureEnabled: false,
                cardStyleInterpolator:
                CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <Stack.Screen name="Home"  component={Home}/>
            <Stack.Screen name="AddItem"  component={AddItem}/>
        </Stack.Navigator>
    );
};

const Home: React.FC = () => {
    const { user } = useAuth();
    const navigation = useNavigation();
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const userItems = user.lists[0].items;
    // Testar recebendo em um useEffect
    const [productItems, setProductItems] = useState<Item[]>(userItems);

    // useEffect(() => {
    //     setProductItems(userItems);
    // }, [productItems]);

    // TODO: Talvez vai precisar de um state contendo esse array
    
    
    // '' Quando tocado executa um requisição de atualização do estado(alimentos) enviando como corpo
    // O estado vai ser alterado com o(s) número(s) de mudança e seu index

    // O estado criado pelo search tem que substituir os cards atuais
    // TODO: Nested ScrollView issue

    const handleHiddenButtonCancel = useCallback(() => {
        // arrayList = user.lists;
        setProductItems(user.lists[0].items);
        
        console.log("Lista do context",user.lists[0].items);
        console.log("Lista do state", productItems);
        setIsEditing(false);
    }, [productItems]);

    const handleHiddenButtonSubmit = useCallback(() => {
        console.log(productItems);

        // TODO: Mandar esse array alterado para o context
        // updateItem()
    }, []);

    const handleEditingChange = useCallback((itemId: string, newVal: number, listName: string) => {
        if(!isEditing){
            setIsEditing(true);
        }

        // Busca o item em específico no array
        const changedItem = productItems.find(item => item.id === itemId);

        // Altera o atributo qtd como queremos
        if(changedItem){
            changedItem.qtd = newVal;
        }

        // Meio que copia e junta tudo em um novo array
        const items = Object.assign([], productItems, changedItem);

        // Realoca esse novo array no state
        // Por algum motivo aqui ele altera o context
        setProductItems((prevItems) => Object.assign([], prevItems, changedItem));

    }, [isEditing, productItems]);

    const handleRenderItem = useCallback(({item}) => (
        <ProductItem
            item={item}
            onChange={handleEditingChange}
            isEditing={isEditing}
            listName="Default"
        />
    ), []);

    return(
        <Container>
            {/* TODO Talvez mudar para sólido */}
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>
            {/* <KeyboardAvoidingView enabled={false} style={{flex: 1}} behavior={Platform.OS === "ios" ? "padding" : undefined } > */}
                <ImageBackground source={Back} >
                    <Head>
                        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Icon 
                                name="bars"
                                size={30}
                                color="#FFFFFF"
                            />
                        </TouchableOpacity>
                    </Head>
                    <Header>
                        <T1>Acompanhe seus alimentos{example.user.lists[0].items[0].qtd}</T1>
                        <InputContainer>
                            <TextInput
                                placeholder="Pesquisar..."
                            />
                            <Button>
                                <Icon 
                                    name="search"
                                    size={20}
                                    color="#ffffff"
                                />
                            </Button>
                        </InputContainer>
                    </Header>
                </ImageBackground>

                
                <Body>
                    <ScrollView style={{ flex:1, paddingHorizontal: 16 }}>
                        <View style={{ alignItems: 'center', flexDirection: 'row', flex: 1, marginBottom: 8 }}>
                            <T2>Recentes</T2>
                            <TouchableOpacity>
                                <Text>Ver mais</Text>
                            </TouchableOpacity>
                        </View>
                        {/* 
                            colors={['#FF3840', '#FF878C']}

                            colors={['#FFAB41', '#FFCE90']}

                            colors={['#FFE500', '#FFF493']}

                            colors={['#71CB32', '#BCEA9D']}
                         */}
                        <FlatList
                            data={productItems}
                            renderItem={handleRenderItem}
                            keyExtractor={(item, index) => index.toString()}
                            horizontal
                            contentContainerStyle={{ paddingVertical: 2 }}
                            scrollEnabled
                        />
                        
                        <View style={{ alignItems: 'center', flexDirection: 'row', flex: 1, marginBottom: 8 }}>
                            <T3>Preste a vencer</T3>
                            <TouchableOpacity>
                                <Text>Ver mais</Text>
                            </TouchableOpacity>
                        </View>

                        {/* TODO: Criar diferentes array de itens dependendo do filtro */}
                        <FlatList
                            data={productItems}
                            renderItem={handleRenderItem}
                            keyExtractor={(item, index) => index.toString()}
                            horizontal
                            contentContainerStyle={{ paddingVertical: 2 }}
                            scrollEnabled
                        />
                        
                        <View style={{ alignItems: 'center', flexDirection: 'row', flex: 1, marginBottom: 8 }}>
                            <T3>Listas personalizadas</T3>
                            <TouchableOpacity>
                                <Text>Ver mais</Text>
                            </TouchableOpacity>
                        </View>

                        <FlatList
                            data={productItems}
                            renderItem={handleRenderItem}
                            keyExtractor={(item, index) => index.toString()}
                            horizontal
                            contentContainerStyle={{ paddingVertical: 2 }}
                            scrollEnabled
                        />
                    </ScrollView>
                </Body>

                <AddButton onPress={() => navigation.navigate('AddItem', {isList: false})}>
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
            {/* </KeyboardAvoidingView> */}
        </Container>
    );
};

export default HomeRoutes;
