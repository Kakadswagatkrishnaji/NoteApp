import React, {createContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const NotesContext = createContext();

export const NotesProvider = ({children}) => {
  const [notes, setNotes] = useState([]);

  const addNote = async note => {
    const updatedNotes = [...notes, note];
    setNotes(updatedNotes);
    await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const editNote = async (noteId, updatedNote) => {
    const updatedNotes = notes.map(note =>
      note.id === noteId ? updatedNote : note,
    );
    setNotes(updatedNotes);
    await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const deleteNote = async noteId => {
    const updatedNotes = notes.filter(note => note.id !== noteId);
    setNotes(updatedNotes);
    await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  return (
    <NotesContext.Provider value={{notes, addNote, editNote, deleteNote}}>
      {children}
    </NotesContext.Provider>
  );
};
