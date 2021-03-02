import React from 'react';
import { View } from 'react-native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';


import { Container, Title, Text, ChangeContainer, Button } from './styles';

interface ItemProps {
    colors: string[];
    title: string;
    text: string;
    qtd: number;
}

const ListItem: React.FC<ItemProps> = ({colors, title, text, qtd}) => {

    return(
        <Container 
            colors={colors}
            start={{x: 0.1, y: 0.5}}
            end={{x: 0.5, y: 1.0}}
        >
            <View style={{ flex: 1 }}>
                <Title>{title}</Title>
                <Text>{text}</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                <Button>
                    <Icon
                        name="minus"
                        size={20}
                        color="white"
                    />
                </Button>
                <Text style={{ marginHorizontal: 12 }} >{qtd}</Text>
                <Button>
                    <Icon
                        name="plus"
                        size={20}
                        color="white"
                    />
                </Button>
            </View>
        </Container>
    );
};

export default ListItem;