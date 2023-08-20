import { View, Text, Button, SafeAreaView , TouchableHighlight , ScrollView, TouchableHighlightBase} from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { styles } from '../../assets/styles/globalStyles';

interface RouterProps {
  navigation: NavigationProp<any,any>;
}

const cardsData = [
  {
    title: 'Card 1',
    createdOn: '2023-08-20',
    openDate: '2023-08-21',
  },
  {
    title: 'Card 2',
    createdOn: '2023-08-19',
    openDate: '2023-08-22',
  },
  {
    title: 'Card 2',
    createdOn: '2023-08-19',
    openDate: '2023-08-22',
  },  {
    title: 'Card 2',
    createdOn: '2023-08-19',
    openDate: '2023-08-22',
  },  {
    title: 'Card 2',
    createdOn: '2023-08-19',
    openDate: '2023-08-22',
  },  {
    title: 'Card 2',
    createdOn: '2023-08-19',
    openDate: '2023-08-22',
  },  {
    title: 'Card 2',
    createdOn: '2023-08-19',
    openDate: '2023-08-22',
  },  {
    title: 'Card 2',
    createdOn: '2023-08-19',
    openDate: '2023-08-22',
  },  {
    title: 'Card 2',
    createdOn: '2023-08-19',
    openDate: '2023-08-22',
  },  {
    title: 'Card 2',
    createdOn: '2023-08-19',
    openDate: '2023-08-22',
  },  {
    title: 'Card 2',
    createdOn: '2023-08-19',
    openDate: '2023-08-22',
  },
  // Add more card data as needed
];

const Homepage = ({ navigation }: RouterProps) => {

  const renderCards = () => {
    return cardsData.map((card, index) => (
      <View key={index} style={styles.card}>
        <Text style={styles.cardTitle}>{card.title}</Text>
        <Text style={styles.cardInfo}>Created On: {card.createdOn}</Text>
        <Text style={styles.cardInfo}>Open Date: {card.openDate}</Text>
      </View>
    ));
  };
  
  return (
    <SafeAreaView style={styles.homepageContainer}>
        <Text style={styles.title}>your entries</Text>
        <View style={styles.homepageHeader}>
          <TouchableHighlight
          style={styles.button}
          onPress={() => navigation.navigate('create')} 
          >
            <Text style={styles.buttonText}>write</Text>
          </TouchableHighlight>

          <TouchableHighlight
          style={styles.button}
          onPress={() => navigation.navigate('recap')}
          >
            <Text style={styles.buttonText}>recap</Text>
          </TouchableHighlight>

          <TouchableHighlight
          style={styles.button}
          onPress={() => FIREBASE_AUTH.signOut()}
          >
            <Text style={styles.buttonText}>logout</Text>
          </TouchableHighlight>
        </View>

        <ScrollView>
          {renderCards()}
        </ScrollView>
    </SafeAreaView>

  )
}

export default Homepage