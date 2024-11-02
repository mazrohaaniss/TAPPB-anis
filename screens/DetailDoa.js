import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailDoa = ({ route }) => {
  const { doa } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{doa.doa}</Text>
        <Text style={styles.arabic}>{doa.ayat}</Text>
        <Text style={styles.translation}>{doa.artinya}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B4332',
    padding: 20,
    justifyContent: 'top',
    alignItems: 'top',
  },
  card: {
    backgroundColor: '#2C6E49', // Card background color
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
    width: '100%', // Adjust as needed
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 40,
    textAlign: 'center',
  },
  arabic: {
    fontSize: 26,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  translation: {
    fontSize: 16,
    color: 'yellow',
    textAlign: 'center',
  },
});

export default DetailDoa;
