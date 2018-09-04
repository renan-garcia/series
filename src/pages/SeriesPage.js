import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

import series from '../../series.json';

const SeriesPage = props => (
  <View>
    <FlatList 
      data={series} 
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <View>
          <Text>{`${item.id} - ${item.title}`}</Text>
        </View>
      )} />
  </View>
);

const styles = StyleSheet.create({

})

export default SeriesPage;