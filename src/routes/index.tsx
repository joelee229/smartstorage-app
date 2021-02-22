import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import InitialScreen from '../pages/InitialScreen';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {

    return (
        <Auth.Navigator 
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: '#fdfdfd'
                }
            }}
        >
            <Auth.Screen name="InitialScreen" component={InitialScreen} />
            <Auth.Screen name="SignIn" component={SignIn} />
            <Auth.Screen name="SignUp" component={SignUp} />
        </Auth.Navigator>
    );
}

export default AuthRoutes;