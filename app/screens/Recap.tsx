import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';

const Recap = () => {
  const [topicData, setTopicData] = useState(null);


  return (
    <View>
      <Text>Recap</Text>
      {topicData ? (
        <Text>{JSON.stringify(topicData)}</Text>
      ) : (
        <Text>Loading topic data...</Text>
      )}
    </View>
  );
};

export default Recap;
