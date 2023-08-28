import React from 'react';
import { View, Text, Image, TouchableHighlight, Alert } from 'react-native'; // Import Alert component
import { styles } from '../../../assets/styles/globalStyles'; // Update the import path to match your project structure
import CardProps from '../../types/Cardprops';

const Card = (props: CardProps) => {
  const navigateToEntry = () => {
    if (new Date() < props.open_date) { // Compare current date with open_date
      // Display a pop-up alert
      Alert.alert(
        'Cannot Open',
        `Can only open on or after the open date: ${props.open_date.toDateString()}`
      );
    } else {
      props.navigation.navigate('entry');
    }
  };

  return (
    <TouchableHighlight style={styles.card} onPress={navigateToEntry}>
      <View style={styles.cardsContainer}>
        <View>
          <Text style={styles.cardTitle}>{props.title}</Text>
          <Text style={styles.cardInfo}>Created On: {props.date_created.toDateString()}</Text>
          <Text style={styles.cardInfo}>Open Date: {props.open_date.toDateString()}</Text>
        </View>
        <View>
          <Image source={{ uri: props.image }} style={styles.cardImage} />
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default Card;
