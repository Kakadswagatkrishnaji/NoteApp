import React, { useState, useContext, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
import { NotesContext } from '../context/NotesContext';

const NoteFormScreen = ({ navigation, route }) => {
  const { addNote, editNote } = useContext(NotesContext); // Use `editNote` here
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const note = route.params?.note;

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setDescription(note.description);
    }
  }, [note]);

  const handleSave = () => {
    // Validation check
    if (!title.trim() || !description.trim()) {
      Alert.alert('Validation Error', 'Title and Description cannot be empty.');
      return;
    }

    if (note) {
      // Use `editNote` and pass the correct arguments
      editNote(note.id, { id: note.id, title, description });
    } else {
      addNote({ id: Date.now(), title, description });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center', marginTop: 150 }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
          <TextInput
            placeholder="Title"
            placeholderTextColor={'grey'}
            value={title}
            onChangeText={setTitle}
            style={styles.input}
          />
          <TextInput
            placeholder="Description"
            placeholderTextColor={'grey'}
            value={description}
            onChangeText={setDescription}
            style={styles.input}
            multiline
          />
          <TouchableOpacity style={styles.Savenotestyle} onPress={handleSave}>
            <Text style={{ color: 'black' }}>Save Note</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    borderWidth: 0.5,
    marginBottom: 15,
    padding: 10,
    fontSize: 18,
    color: 'black',
    borderRadius: 5,
  },
  Savenotestyle: {
    backgroundColor: 'purple',
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default NoteFormScreen;
