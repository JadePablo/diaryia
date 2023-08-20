import React, { useState } from 'react';
import { Button, Platform, View, Text, TextInput, SafeAreaView } from 'react-native';
import { styles } from '../../assets/styles/globalStyles';
import DateTimePicker from '@react-native-community/datetimepicker';
const Create = () => {
  const [userInput, setUserInput] = useState('');

  return (
    <SafeAreaView style={styles.homepageContainer}>
      <Text style={styles.title}>Write</Text>
      
      <TextInput
        value={userInput}
        onChangeText={setUserInput}
        placeholder="whatever is on your mind..."
        style={styles.textInput}
        multiline
        placeholderTextColor="white" // Color for placeholder text
        selectionColor="white" // Color for text selection highlight
        underlineColorAndroid="white" // Color for Android underline
      />

    </SafeAreaView>   
  );
};

export default Create;
