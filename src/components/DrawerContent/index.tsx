import React from 'react';
import { View, Image } from 'react-native';
import { DrawerContentScrollView, DrawerContentComponentProps, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

import styles from './styles';
import Logo from '../../assets/logo.png';
import { useAuth } from '../../hooks/auth';

const DrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
    const { signOut } = useAuth();

    return(
        <View style={styles.container} >
            {/* Header */}
            <View style={styles.header}>
                <Image
                    source={Logo}
                    resizeMode='contain'
                    style={{ width: '100%' }}
                />
            </View>

            <DrawerContentScrollView 
                {...props}
                contentContainerStyle={{ paddingTop: 0, marginVertical: 0 }}
                scrollEnabled
            >
                {/* Body */}
                <DrawerItemList
                    {...props}
                    itemStyle={styles.item}
                    labelStyle={styles.itemLabel}
                    activeTintColor="black"
                    inactiveTintColor="#979797"
                />

                {/* Modal de confirmação compartilhado */}
                <DrawerItem 
                    label="Deslogar"
                    onPress={signOut}
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