import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { styles } from '../../../assets/styles/globalStyles'; // Update the import path to match your project structure
import CardProps from '../../types/Cardprops';

const Card = (props:CardProps) => {
    const navigateToEntry = () => {
        props.navigation.navigate('entry');
      };
  return (
    <TouchableHighlight style={styles.card}  onPress={navigateToEntry}>
      <View style={styles.cardsContainer}>
        <View>
          <Text style={styles.cardTitle}>{props.title}</Text>
          <Text style={styles.cardInfo}>Created On: {props.date_created.toDateString()}</Text>
          <Text style={styles.cardInfo}>Open Date: {props.open_date.toDateString()}</Text>
          <Text style={styles.cardInfo}>{props.text}</Text>
        </View>
        <View>
          <Image source={{ uri: props.image }} style={styles.cardImage} />
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default Card;
