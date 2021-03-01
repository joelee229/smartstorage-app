import React from 'react';
import { View, Image } from 'react-native';
import { DrawerContentScrollView, DrawerContentComponentProps, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

import styles from './styles';
import Logo from '../../assets/logo.png';

const DrawerContent: React.FC<DrawerContentComponentProps> = (props) => {

    return(
        <View style={styles.container} >
            {/* Header */}
            <View style={styles.header}>
                <Image
                    source={Logo}
                />
            </View>

            <DrawerContentScrollView {...props}>
                {/* Body */}
                <DrawerItemList 
                    {...props} 
                    itemStyle={styles.item}
                    labelStyle={styles.itemLabel}
                />

                <DrawerItem 
                    label="Deslogar"
                    onPress={() => {}}
                    style={styles.item}
                    labelStyle={styles.itemLabel}
                    icon={({ size }) => (
                        <Icon
                            size={size}
                            name="power-off"
                            color='#979797'
                        />
                    )}
                    
                />
            </DrawerContentScrollView>
        </View>
    );
};

export default DrawerContent;