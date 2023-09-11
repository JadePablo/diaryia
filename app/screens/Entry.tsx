import { TouchableHighlight, ScrollView, Image, Text, View } from 'react-native'
import React, { Component , useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../assets/styles/globalStyles';

const Entry = ({route}:any)  => {

    return (
        <SafeAreaView style={styles.homepageContainer}>
            <View>
              
              <Text style={styles.title}>
                {route.params.title}
              </Text>
              <Text style={styles.title}>{route.params.date_created}</Text>
            <View style={styles.line} />
            <Text style={styles.buttonText}>
              {route.params.text}
            </Text>
            <View style={styles.line} />
            {route.params.image !== '' && (
            <Image source={{ uri: route.params.image }} style={styles.imageFull} />
        )}
            </View>

       </SafeAreaView>
    )
}

export default Entry;