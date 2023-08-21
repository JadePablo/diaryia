import React, { useState } from 'react';
import { Image , Text, TextInput, SafeAreaView, TouchableOpacity, Platform } from 'react-native';
import { styles } from '../../assets/styles/globalStyles';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';

const Create = () => {
  const [userInput, setUserInput] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  const onChange = (event: any, selectedDate: any) => {
    setShowDatePicker(Platform.OS === 'ios');
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const handleSubmit = () => {
    console.log('Inputted Text:', userInput);
    console.log('Selected Date:', date.toDateString());
    console.log('Selected Image URI:', image);
    // You can add further actions or API calls here
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
    setImage(null);
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
