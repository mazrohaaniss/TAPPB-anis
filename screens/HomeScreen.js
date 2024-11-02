import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [doaList, setDoaList] = useState([]);
  const [filteredDoaList, setFilteredDoaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const fetchAllDoa = async () => {
      try {
        const response = await axios.get('https://doa-doa-api-ahmadramadhan.fly.dev/api');
        setDoaList(response.data);
        setFilteredDoaList(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllDoa();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const filteredData = doaList.filter((doa) =>
        doa.doa.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredDoaList(filteredData);
    } else {
      setFilteredDoaList(doaList);
    }
  };

  const handleDoaPress = (doa) => {
    navigation.navigate('DetailDoa', { doa });
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Doa Pilihan</Text>
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="white" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Cari doa..."
          placeholderTextColor="white"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <FlatList
        data={filteredDoaList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleDoaPress(item)} style={styles.card}>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.doa}</Text>
              <Text style={styles.cardArabic}>{item.ayat}</Text>
            </View>
            <FontAwesome name="chevron-right" size={20} color="gray" />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B4332', // Latar belakang hijau gelap
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2D6A4F',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginHorizontal: 16,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
    color: 'white',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2D6A4F',
    borderRadius: 8,
    padding: 15,
    marginHorizontal: 16,
    marginVertical: 5,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  cardArabic: {
    fontSize: 16,
    color: '#B7C9B5',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalArabic: {
    fontSize: 25,
    color: '#008000',
    marginVertical: 20,
  },
  modalTranslation: {
    fontSize: 16,
    color: '#555',
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#ff4500',
    borderRadius: 4,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default HomeScreen;
