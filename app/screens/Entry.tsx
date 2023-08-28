import { Image, Text, View } from 'react-native'
import React, { Component } from 'react'

const Entry = () => {
    const verticalImage = "https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
    return (
        <View>
            <Text>entry page</Text>
            <Image source={{uri: verticalImage}} style={{ width: '40%', height: '30%',borderRadius:10 }}/>

        </View>
    )
}

export default Entry;