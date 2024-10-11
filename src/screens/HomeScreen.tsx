import React, { useContext, useState, useEffect } from 'react';
import { View, FlatList, Button, TextInput, StyleSheet, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';
import { NotesContext } from '../context/NotesContext';
import NoteItem from '../components/NoteItem';

const HomeScreen = ({ navigation }) => {
  const { notes, deleteNote } = useContext(NotesContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNotes, setFilteredNotes] = useState(notes);

  // Filter notes based on search query
  useEffect(() => {
    if (searchQuery) {
      const filtered = notes.filter(note =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredNotes(filtered);
    } else {
      setFilteredNotes(notes);
    }
  }, [searchQuery, notes]);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.content}>
        <TextInput
          placeholder="Search by title"
          placeholderTextColor={'grey'}
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.searchInput}
        />
        <FlatList
          data={filteredNotes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <NoteItem
              note={item}
              onEdit={(note) => navigation.navigate('NoteForm', { note })}
              onDelete={(id) => deleteNote(id)}
            />
          )}
        />
      </View>

      {/* Button at the bottom */}
      <TouchableOpacity 
        style={styles.Addnotestyle} 
        onPress={() => navigation.navigate('NoteForm')}
      >
        <Text style={{ color: 'white' }}>Add Note</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  content: {
    flex: 1,
    padding: 10,
  },
  searchInput: {
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 8,
    marginBottom: 15,
    fontSize: 18,
    color: 'black',
  },
  Addnotestyle: {
    backgroundColor: 'purple',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
  },
});

export default HomeScreen;
