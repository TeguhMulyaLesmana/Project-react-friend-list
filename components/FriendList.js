import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import FriendItem from './FriendItem';

const FriendList = ({ friends, onViewDetail }) => {
  return (
    <FlatList
      data={friends}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <FriendItem friend={item} onViewDetail={onViewDetail} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 10,
  },
});

export default FriendList;
