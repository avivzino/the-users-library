import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Users} from '../screens/Users';
import {AddUser} from '../screens/AddUser';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Users"
        component={Users}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddUser"
        component={AddUser}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
