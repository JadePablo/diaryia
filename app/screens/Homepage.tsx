import {View, Text, SafeAreaView , TouchableHighlight , ScrollView} from 'react-native'
import React from 'react'
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { styles } from '../../assets/styles/globalStyles';
import Card from '../components/Homepage/Card';
import RouterProps from '../types/Navigationprops';


const horizontalImage = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
const verticalImage = "https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80"

const cardsData = [
  {
    title: 'Card 1',
    createdOn: '2023-08-20',
    image: horizontalImage,
    openDate: '2023-08-21',
  },
  {
    title: 'Card 2',
    createdOn: '2023-08-19',
    image: verticalImage,
    openDate: '2023-08-22',
  },
  {
    title: 'Card 2',
    createdOn: '2023-08-19',
    image: verticalImage,
    openDate: '2023-08-22',
  },  {
    title: 'Card 2',
    createdOn: '2023-08-19',
    image: verticalImage,
    openDate: '2023-08-22',
  },  {
    title: 'Card 2',
    image: verticalImage,
    createdOn: '2023-08-19',
    openDate: '2023-08-22',
  },  {
    title: 'Card 2',
    image: verticalImage,
    createdOn: '2023-08-19',
    openDate: '2023-08-22',
  },  {
    title: 'Card 2',
    createdOn: '2023-08-19',
    image: verticalImage,
    openDate: '2023-08-22',
  },  {
    title: 'Card 2',
    createdOn: '2023-08-19',
    image: verticalImage,
    openDate: '2023-08-22',
  },  {
    title: 'Card 2',    image: verticalImage,
    createdOn: '2023-08-19',
    openDate: '2023-08-22',
  },  {
    title: 'Card 2',
    createdOn: '2023-08-19',
    openDate: '2023-08-22',    image: verticalImage,
  },  {
    title: 'Card 2',
    createdOn: '2023-08-19',
    openDate: '2023-08-22',    image: verticalImage,
  },
  // Add more card data as needed
];

const Homepage = ({ navigation }: RouterProps) => {

  const renderCards = () => {
    return cardsData.map((card, index) => (
      <Card 
        key={index}
        date_created={new Date()}
        open_date={new Date()}
        title={card.title}
        image={card.image}
        text={"hello"}
        navigation={navigation}
      />
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