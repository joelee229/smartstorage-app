import React, { useCallback, useState, useImperativeHandle, forwardRef } from 'react';
import { View } from 'react-native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';


import { Container, Title, Text, ChangeContainer, Button } from './styles';
import Item from '../../utils/model/item';
// TODO: Ícone X e sem a val

interface ItemProps {
    item: Item;
    listName: string;
    cType?: string;
    onChange(itemId: string, newVal: number, listName: string): void;
    isEditing: boolean;
}


const ListItem: React.FC<ItemProps> = ({item, isEditing, onChange, cType='', listName}) => {
    const [num, setNum] = useState<number>(item.qtd);

    // Note: useCallback gera uma função que nunca se reenderiza novamente.
    // Para funções que alteram um estado coloque este estado como dependência



    const handleNumberChange = useCallback((type: string) => {
        let val = num;
        if(type === "+"){
            val = num + 1;
            setNum(prevState => prevState + 1);
        } else {
            if(num > 0){
                val = num - 1;
                setNum(num - 1);
            }
        }
        onChange(item.id, val, listName);
    }, [num, isEditing, item]);

    return(
        <Container 
            colors={item.color}
            start={{x: 0.1, y: 0.5}}
            end={{x: 0.5, y: 1.0}}
        >
            {cType === 'list' &&
                <Button style={{ marginRight: 8 }}>
                    <Icon
                        name="times"
                        size={20}
                        color="white"
                    />
                </Button>
            }

            <View style={{ flex: 1 }}>
                <Title>{item.name}</Title>
                {item.validity && <Text>Val: {item.validity}</Text>}
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                <Button onPress={() => handleNumberChange("-")}>
                    <Icon
                        name="minus"
                        size={20}
                        color="white"
                    />
                </Button>
                <Text style={{ marginHorizontal: 12 }} >{num}</Text>
                <Button onPress={() => handleNumberChange("+")}>
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