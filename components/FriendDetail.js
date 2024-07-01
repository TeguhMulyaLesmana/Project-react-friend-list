import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const FriendDetailScreen = ({ route, navigation }) => {
  const { friend } = route.params;

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image source={friend.photo} style={styles.photo} />
      <Text style={styles.name}>{friend.name}</Text>
      <Text style={styles.description}>{friend.description}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Kembali ke Daftar Teman" onPress={handleBack} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 100, // Make it round if needed
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default FriendDetailScreen;
