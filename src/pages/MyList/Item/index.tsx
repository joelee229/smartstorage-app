import React, { useCallback } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { StackNavigationOptions } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { Container, Title, Text, Button } from './styles';

interface ItemProps {
    colors: string[];
    title: string;
}

const Item: React.FC<ItemProps> = ({ colors, title }) => {
    const navigation = useNavigation();

    const handleButtonPress = useCallback(() => {
        navigation.navigate('List', { title });
    }, []);

    return(
        <Container 
            colors={colors}
            start={{x: 0.1, y: 0.5}}
            end={{x: 0.5, y: 1.0}}
        >
            <Button style={{ marginRight: 8 }}>
                <Icon
                    name="times"
                    size={20}
                    color="white"
                />
            </Button>
            
            <View style={{ flex: 1 }}>
                <Title>{title}</Title>
            </View>

            <TouchableOpacity onPress={handleButtonPress} style={{ padding: 16 }}>
                <Icon
                    name="arrow-right"
                    size={24}
                    color="black"
                />
            </TouchableOpacity>
        </Container>
    );
};

export default Item;