import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import NoteFormScreen from './src/screens/AddEditNoteScreen';
import { NotesProvider } from './src/context/NotesContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NotesProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="NoteForm" component={NoteFormScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NotesProvider>
  );
};

export default App;
