import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const FriendItem = ({ friend, onViewDetail }) => {
  return (
    <TouchableOpacity onPress={() => onViewDetail(friend)}>
      <View style={styles.container}>
        <Image source={friend.photo} style={styles.photo} />
        <View style={styles.info}>
          <Text style={styles.name}>{friend.name}</Text>
          <Text style={styles.description}>{friend.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 2,
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  info: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default FriendItem;
