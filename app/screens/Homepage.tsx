import { Alert, View, Text, SafeAreaView , TouchableHighlight , ScrollView} from 'react-native'
import React , { useState , useEffect } from 'react'
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { styles } from '../../assets/styles/globalStyles';
import Card from '../components/Homepage/Card';
import RouterProps from '../types/Navigationprops';
import { fetchEntries } from '../api/Download';
import Entry from '../types/Homepageprops';

const Homepage = ({ navigation }: RouterProps) => {

  const [previews,setPreviews] = useState<Entry[]>([]);

  useEffect(
     () => {
    async function fetchData() {
      try {
        const entries = await fetchEntries(); // Assuming fetchEntries is an async function that fetches data
        setPreviews(entries);
      } catch (error) {
        Alert.alert(`Error fetching entries: ${error}`);
      }
    }

    fetchData();
  }
    ,[previews])
  
  const renderCards = () => {
    return previews.map((preview, index) => (
      <Card 
        key={index} //replace this witih the firebase id of the entry
        date_created={preview.created.toDate()}
        open_date={preview.unlock.toDate()}
        text={preview.text_content}
        title={preview.title}
        image={preview.photo_url}
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