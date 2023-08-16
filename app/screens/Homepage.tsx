import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { styles } from '../../assets/styles/globalStyles';
interface RouterProps {
  navigation: NavigationProp<any,any>;
}

const Homepage = ({ navigation }: RouterProps) => {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate('create')} title='+' />
      <Button onPress={() => FIREBASE_AUTH.signOut()} title="Logout" />
    </View>
  )
}

export default Homepage