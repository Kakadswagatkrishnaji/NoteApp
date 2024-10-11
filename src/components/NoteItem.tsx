import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const NoteItem = ({ note, onEdit, onDelete }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.description}>{note.description}</Text>
      <View style={styles.buttons}>
       
        <TouchableOpacity 
        style={styles.editNote} 
        onPress={() => onEdit(note)}
      >
        <Text style={{ color: 'white' }}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.DeleteNote} 
        onPress={() => onDelete(note.id)}
      >
        <Text style={{ color: 'white' }}>Delete</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'black'
  },
  description: {
    marginTop: 5,
    fontSize: 16,
    color:'black'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  editNote:{
    backgroundColor:'orange',
    height:40,
    width:'30%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5
  },
  DeleteNote:{
    backgroundColor:'red',
    height:40,
    width:'30%',
     alignItems:'center',
    justifyContent:'center',
    borderRadius:5
  }
});

export default NoteItem;
