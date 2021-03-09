import React from 'react';
import { TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { useNavigation, DrawerActions, useRoute } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import { Container, ImageBackground, Head, Header, Button, InputContainer, TextInput, T1, Body, AddButton } from './styles';
import Back from '../../assets/backImage.jpg';
import AddItem from '../AddItem';
import Item from './Item';
import AddList from '../AddList';
import List from './List';

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
            <Stack.Screen name="MyList" component={MyList} />
            <Stack.Screen name="AddList" component={AddList} />
            <Stack.Screen name="AddItem" component={AddItem} />
            <Stack.Screen name="List" component={List} />
        </Stack.Navigator>
    );
};

const MyList: React.FC = () => {
    const navigation = useNavigation();

    return(
        <Container>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>
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
                    <T1>Minhas listas</T1>
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
                    <Item
                        colors={['#FFE500', '#FFF493']}
                        title="Dispensa"
                    />
                </ScrollView>
            </Body>

            <AddButton onPress={() => navigation.navigate('AddList')}>
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
