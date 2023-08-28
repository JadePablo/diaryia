import { Image, Text, View } from 'react-native'
import React, { Component , useState, useEffect } from 'react'
import {ref, getDownloadURL} from 'firebase/storage';
import { FIREBASE_STOR } from '../../FirebaseConfig';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../assets/styles/globalStyles';


const Entry = () => {
  
    useEffect(() => {
      // const fetchImage = async () => {
      //   try {
      //     console.log('trying fetch');
      //     const storageRef = ref(FIREBASE_STOR, imageUrl);
      //     const url = await getDownloadURL(storageRef);
      //     console.log(url);
      //     setDownloadUrl(url);
      //   } catch (error) {
      //     console.error('Error fetching image URL:', error);
      //   }
      // };
  
      // fetchImage();
    }, []);

    return (
        <SafeAreaView style={styles.homepageContainer}>
          <View>
            <Text style={styles.title}>Hello</Text>
          </View>
        </SafeAreaView>
    )
}

export default Entry;