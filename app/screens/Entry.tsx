import { Image, Text, View } from 'react-native'
import React, { Component , useState, useEffect } from 'react'
import {ref, getDownloadURL} from 'firebase/storage';
import { FIREBASE_STOR } from '../../FirebaseConfig';


const Entry = () => {
    const verticalImage = "https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
    const imageUrl = 'images'; // Replace with your image path
    const [downloadUrl, setDownloadUrl] = useState('');
  
    useEffect(() => {
      const fetchImage = async () => {
        try {
          console.log('trying fetch');
          const storageRef = ref(FIREBASE_STOR, imageUrl);
          const url = await getDownloadURL(storageRef);
          console.log(url);
          setDownloadUrl(url);
        } catch (error) {
          console.error('Error fetching image URL:', error);
        }
      };
  
      fetchImage();
    }, []);

    return (
        <View>
        {downloadUrl ? (
          <Image
            source={{ uri: downloadUrl }}
            style={{ width: '100%', height: 300 }} // Adjust dimensions as needed
            resizeMode="contain" // Adjust resizeMode as needed
          />
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    )
}

export default Entry;