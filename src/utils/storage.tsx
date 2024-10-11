import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveNotes = async (notes) => {
  try {
    await AsyncStorage.setItem('notes', JSON.stringify(notes));
  } catch (e) {
    console.error('Failed to save notes:', e);
  }
};

export const loadNotes = async () => {
  try {
    const notes = await AsyncStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
  } catch (e) {
    console.error('Failed to load notes:', e);
    return [];
  }
};
