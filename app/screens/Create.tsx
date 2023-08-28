import React, { useState , useEffect } from 'react';
import { Image , Text, TextInput, SafeAreaView, TouchableOpacity, Platform } from 'react-native';
import { styles } from '../../assets/styles/globalStyles';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

import { submitEntry } from '../../utils/uploadFunctions';

import { uploadBytes,uploadString,ref } from 'firebase/storage';
import { FIREBASE_STOR } from '../../FirebaseConfig';

const Create = () => {
  const [userInput, setUserInput] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [image, setImage] = useState('');

  const onChange = (event: any, selectedDate: any) => {
    setShowDatePicker(Platform.OS === 'ios');
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };


  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const handleSubmit = async () => {
  //   try {
  //     const result = await submitEntry(
  //       {
  //         date: date,
  //         text_content: userInput,
  //         user_id: 3,
  //         photoUrl: image
  //       }
  //     );
  //     console.log(result); // "Document added successfully"
  //     // Handle success, reset form, show notification, etc.
  // } catch (error) {
  //     console.error(error); // Handle error, show error message, etc.
  // }

  console.log('image: ' , image);

  const storageRef = ref(FIREBASE_STOR,'images');
  
  try {
    const imageInfo = await FileSystem.getInfoAsync(image);
    
    if (imageInfo.exists) {
      const blob = await FileSystem.readAsStringAsync(image, {
        encoding: FileSystem.EncodingType.Base64,
      });

      // Create a Uint8Array from the base64 encoded data
      const uint8Array = new Uint8Array(blob.length);
      for (let i = 0; i < blob.length; i++) {
        uint8Array[i] = blob.charCodeAt(i);
      }

      // Upload the Uint8Array using uploadBytes
      await uploadBytes(storageRef, uint8Array);
    } else {
      console.error('Image does not exist.');
    }
  } catch (error) {
    console.error('Error reading image:', error);
  }

  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const removeImage = () => {
    setImage('');
  };

  return (
    <SafeAreaView style={styles.homepageContainer}>
      
      <Text style={styles.title}>Write</Text>
      
      <TextInput
        value={userInput}
        onChangeText={setUserInput}
        placeholder="whatever is on your mind..."
        style={[styles.textInput, { textAlignVertical: 'top' }]}
        multiline
        placeholderTextColor="white"
        selectionColor="white"
        underlineColorAndroid="white"
      />

      <TouchableOpacity onPress={showDatepicker} style={styles.button}>
        <Text style={styles.buttonText}>unlock date: {date.toDateString()}</Text>
      </TouchableOpacity>

      
      <TouchableOpacity onPress={pickImage} style={styles.button}>
        <Text style={styles.buttonText}>add a pic</Text>
      </TouchableOpacity>

      {
        image && 
        <TouchableOpacity onPress={removeImage} style={styles.button}>
          <Text style={styles.buttonText}>remove pic</Text>
        </TouchableOpacity>
      }

      
      {image && <Image source={{ uri: image }} style={{ width: '40%', height: '30%',borderRadius:10 }} />}

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>save</Text>
      </TouchableOpacity>

    </SafeAreaView>   
  );
};

export default Create;
