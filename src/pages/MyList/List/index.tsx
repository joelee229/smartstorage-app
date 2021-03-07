import React from 'react';
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
    TextInput } from './styles';
import Back from '../../../assets/backImage.jpg';
import ListItem from '../../../components/ListItem';

type ParamList = {
    Detail: {
        title: string;
        // email: string;
    }
}

const List: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute<RouteProp<ParamList, 'Detail'>>();

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
                    <T1>{route.params.title}</T1>      
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
                    {/* FlatList renderizando todos os alimentos dessa lista */}
                    <ListItem
                        colors={['#FFAB41', '#FFCE90']}
                        type="list"
                        title={route.params.title}
                        qtd={5}
                    />

                    <ListItem
                        colors={['#FFE500', '#FFF493']}
                        type="list"
                        title="Macarrão"
                        qtd={5}
                    />
                </ScrollView>
            </Body>

            {/* Adicionar item nessa lista em específico */}
            <AddButton onPress={() => navigation.navigate('AddItem', {isList: false})}>
                <Icon 
                    name="plus"
                    size={40}
                    color="white"
                />
            </AddButton>
        </Container>
    );
};

export default List;