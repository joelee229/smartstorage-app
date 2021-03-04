import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';


import { Container, Title, Text, ChangeContainer, Button } from './styles';
// TODO: Ícone X e sem a val

interface ItemProps {
    type?: string;
    colors: string[];
    title: string;
    text: string;
    qtd: number;
}

const ListItem: React.FC<ItemProps> = ({colors, title, text, qtd, type=''}) => {
    const [num, setNum] = useState<number>(qtd);
    let val = num;

    // Note: useCallback gera uma função que nunca se reenderiza novamente.
    // Então tome cuidado com funções que precisam altera um estado continuamente
    const handleNumberChange = (type: string) => {
        if(type === "+"){
            let res = num + 1;
            setNum(res);
            // setTimeout(() => console.log(num, res), 1000);
            console.log(num);
        } else {
            let res = num - 1;
            setNum(res);
            console.log(num);
        }
    }

    return(
        <Container 
            colors={colors}
            start={{x: 0.1, y: 0.5}}
            end={{x: 0.5, y: 1.0}}
        >
            {type === 'list' &&
                <Button style={{ marginRight: 8 }}>
                    <Icon
                        name="times"
                        size={20}
                        color="white"
                    />
                </Button>
            }

            <View style={{ flex: 1 }}>
                <Title>{title}</Title>
                <Text>{text}</Text>
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