import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import FriendList from './FriendList';

const Home = ({ navigation }) => {
  const friends = [
    { id: '1', name: 'Daffa', description: 'kang seblak.', photo: require('../assets/daffa.jpeg') },
    { id: '2', name: 'Akhsan', description: 'Koyo Man.', photo: require('../assets/akhsan.jpeg') },
    { id: '3', name: 'Riza', description: 'sulit.', photo: require('../assets/riza.jpeg') },
  ];

  const viewFriendDetail = (friend) => {
    navigation.navigate('Friend Detail', { friend });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Teman</Text>
      <FriendList friends={friends} onViewDetail={viewFriendDetail} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default Home;
