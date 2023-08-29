import { Image, Text, View } from 'react-native'
import React, { Component , useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../assets/styles/globalStyles';
import EntryContents from '../types/Entryprops';


const Entry = (props: EntryContents) => {


    return (
        <SafeAreaView style={styles.homepageContainer}>
          <View>
            <Text style={styles.title}>{props.title}</Text>
          </View>
        </SafeAreaView>
    )
}

export default Entry;