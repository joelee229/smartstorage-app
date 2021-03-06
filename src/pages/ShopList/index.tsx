import React from 'react';
import { TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import { Container, ImageBackground, Head, Header, Button, InputContainer, TextInput, T1, Body, AddButton } from './styles';
import Back from '../../assets/backImage.jpg';
import ListItem from '../../components/ListItem';
import AddItem from '../AddItem';

const Stack = createStackNavigator();

const ShopRoute: React.FC = () => {

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
            <Stack.Screen name="ShopList" component={ShopList} />
            <Stack.Screen name="AddItem" component={AddItem} />
        </Stack.Navigator>
    );
};

const ShopList: React.FC = (props) => {
    const navigation = useNavigation();
    
    return(
        <Container>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>
            <ImageBackground source={Back} >
                <Head>
                    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                        <Icon 
                            name="bars"
                            size={24}
                            color="#FFFFFF"
                        />
                    </TouchableOpacity>
                </Head>
                <Header>
                    <T1>Lista de compras</T1>
                        
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
                    <ListItem
                        colors={['#FFE500', '#FFF493']}
                        type="list"
                        title="Macarrão"
                        qtd={5}
                    />
                </ScrollView>
            </Body>

            <AddButton onPress={() => navigation.navigate('AddItem', {isList: true})}>
                <Icon 
                    name="plus"
                    size={40}
                    color="white"
                />
            </AddButton>
        </Container>
    );
};

export default ShopRoute;
