import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const DoaScreen = () => {
  const [doaList, setDoaList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoa = async () => {
      try {
        const response = await axios.get('https://doa-doa-api-ahmadramadhan.fly.dev/api');
        setDoaList(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoa();
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={doaList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.doaContainer}>
            <Text style={styles.title}>{item.doa}</Text>
            <Text style={styles.arabic}>{item.ayat}</Text>
            <Text style={styles.translation}>{item.artinya}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#B7C9B5',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doaContainer: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  arabic: {
    fontSize: 20,
    color: '#008000',
    marginVertical: 10,
  },
  translation: {
    fontSize: 16,
    color: '#555',
  },
});

export default DoaScreen;
