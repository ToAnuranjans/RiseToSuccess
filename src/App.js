import React from 'react';
import { Platform } from 'react-native';
import { HomeScreen, UserScreen, UserDetailsScreen } from './screens';
import { USER_DETAILS, HOME, USERS } from './screens/constants';
import Colors from './themes/Colors';
import store from './store/Store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const defaultScreenOptions = ({ route }) => {
  return {
    title: route.name,
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
    },
    headerTitleStyle: {
      color: Platform.OS === 'android' ? '#fff' : Colors.primary,
    },
  };
};


function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={defaultScreenOptions}>
          <Stack.Screen name={HOME} component={HomeScreen} options={{ title: 'Home' }} />
          <Stack.Group>
            <Stack.Screen name={USERS} component={UserScreen} options={{ title: 'Users' }} />
            <Stack.Screen name={USER_DETAILS} component={UserDetailsScreen} options={{ title: 'User Details' }}/>
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


export default App;
