import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

function App() {
    return(
          <NavigationContainer>
              <Stack.Navigator initialRouteName = "Home" screenOptions = {{
                  headerShown: false
              }}>
              <Stack.Screen name = "Home" component = {HomeScreen} />
              <Stack.Screen name = "SpaceCrafts" component = {SpaceCraftsScreen} />
              <Stack.Screen name = "DailyPic" component = {DailyPicScreen} />
              <Stack.Screen name = "StarMap" component = {StarMapScreen} />
              </Stack.Navigator>
          </NavigationContainer>
    );
}

