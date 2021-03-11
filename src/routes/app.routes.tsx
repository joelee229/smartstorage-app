import React from 'react';
import { Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather as Icon, FontAwesome5 as IconF } from '@expo/vector-icons';

import Home from '../pages/Home';
import MyList from '../pages/MyList';
import Profile from '../pages/Profile';
import ShopList from '../pages/ShopList';
import Terms from '../pages/Terms';
import DrawerContent from '../components/DrawerContent';


const App = createDrawerNavigator();

const AppRoutes: React.FC = () => {

    return(
        <App.Navigator
            sceneContainerStyle={{
                backgroundColor: '#fdfdfd'
            }}
            drawerContentOptions={{ activeBackgroundColor: "#ECECEC" }}
            drawerContent={props => <DrawerContent {...props} />}
        >
            <App.Screen 
                name="Home" 
                component={Home}
                options={{
                    drawerIcon: ({ size, color }) => (
                        <Icon 
                            name="home"
                            size={size}
                            color={color}
                        />
                    ),
                    drawerLabel: ({ color }) => (
                        <Text style={{
                            color: color,
                            fontFamily: 'Roboto_500Medium',
                            fontSize: 18,
                            marginLeft: -16
                        }}>Início</Text>
                    ),
                    
                }}
            />
            <App.Screen 
                name="MyList" 
                component={MyList}
                options={{
                    drawerIcon: ({ size, color }) => (
                        <IconF
                            name="list"
                            size={size}
                            color={color}
                        />
                    ),
                    drawerLabel: ({ color }) => (
                        <Text style={{
                            color: color,
                            fontFamily: 'Roboto_500Medium',
                            fontSize: 18,
                            marginLeft: -16
                        }}>Minhas listas</Text>
                    ),
                }}
            />
            <App.Screen 
                name="ShopList" 
                component={ShopList}
                options={{
                    drawerIcon: ({ size, color }) => (
                        <Icon
                            name="list"
                            size={size}
                            color={color}
                        />
                    ),
                    drawerLabel: ({ color }) => (
                        <Text style={{
                            color: color,
                            fontFamily: 'Roboto_500Medium',
                            fontSize: 18,
                            marginLeft: -16
                        }}>Lista de compras</Text>
                    ),
                }}
            />
            <App.Screen 
                name="Terms" 
                component={Terms}
                options={{
                    drawerIcon: ({ size, color }) => (
                        <Icon 
                            name="edit"
                            size={size}
                            color={color}
                        />
                    ),
                    drawerLabel: ({ color }) => (
                        <Text style={{
                            color: color,
                            fontFamily: 'Roboto_500Medium',
                            fontSize: 18,
                            marginLeft: -16
                        }}>Termos e serviços</Text>
                    ),
                }}
            />
            <App.Screen 
                name="Profile" 
                component={Profile}
                options={{
                    drawerIcon: ({ size, color }) => (
                        <IconF 
                            name="user-circle"
                            size={size}
                            color={color}
                        />
                    ),
                    drawerLabel: ({ color }) => (
                        <Text style={{
                            color: color,
                            fontFamily: 'Roboto_500Medium',
                            fontSize: 18,
                            marginLeft: -16
                        }}>Perfil</Text>
                    ),                 
                }}
                
            />
        </App.Navigator>
    );
};

export default AppRoutes;