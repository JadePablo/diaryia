import React, { useState } from 'react';
import { Alert, View, Image , Text, TextInput, SafeAreaView, TouchableOpacity, Platform } from 'react-native';
import { styles } from '../../assets/styles/globalStyles';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import { submit } from '../api/Submit';
import RouterProps from '../types/Navigationprops';

const Create = ({navigation} : RouterProps) => {
  const [userInput, setUserInput] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    setShowDatePicker(Platform.OS === 'ios');
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };


  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await submit({
        date: date,
        text_content: userInput,
        user_id: 3,
        photoUrl: image
      })
      setLoading(false);
      Alert.alert('Success','Entry uploaded');
      navigation.navigate('homepage');
    } catch (e) {
      setLoading(false);
      Alert.alert(`Error','Entry failed:${e}`)
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
      <View>
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
      </View>
    </SafeAreaView>   
  );
};

export default Create;
