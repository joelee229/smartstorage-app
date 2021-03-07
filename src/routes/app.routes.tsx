import React from 'react';
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
            drawerContentOptions={{ activeBackgroundColor: "#F2F2F2", activeTintColor: '#000000'}}
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
                            color="#979797"
                        />
                    ),
                    drawerLabel: "Início",
                    
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
                            color="#979797"
                        />
                    ),
                    drawerLabel: "Minhas listas"
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
                            color="#979797"
                        />
                    ),
                    drawerLabel: "Lista de compras"
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
                            color="#979797"
                        />
                    ),
                    drawerLabel: "Termos e serviços"
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
                            color="#979797"
                        />
                    ),
                    drawerLabel: "Perfil",                 
                }}
                
            />
        </App.Navigator>
    );
};

export default AppRoutes;