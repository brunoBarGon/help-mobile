import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import project from '../pages/_ project';
import Tasks from '../pages/tasks';
import Chat from '../pages/chat';


const Auth= createMaterialTopTabNavigator();

const AppRoutes = () =>{
    return(
        <Auth.Navigator
            initialRouteName="Project">

            <Auth.Screen name="Project" 
                component={project} />

            <Auth.Screen name="Tasks" 
                component={Tasks} />

            <Auth.Screen name="Chat" 
                component={Chat} />
                
        </Auth.Navigator>
    )
}

export default AppRoutes;