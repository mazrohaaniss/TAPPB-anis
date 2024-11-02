import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';

export default function ProfileScreen({ navigation }) {
  const user = {
    id: 1,
    imageUrl: "https://avatars.githubusercontent.com/u/128768898?v=4",
    nama: "Mazroha Anis Sugesti",
    nim: "21120122120020",
    kel: "Kelompok 30",
    githubUrl: "https://github.com/mazrohaaniss",
  };

  const handleGithubLink = () => {
    Linking.openURL(user.githubUrl);
  };

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Nama Aplikasi */}
      <View style={styles.appNameContainer}>
        <Text style={styles.appName}>Profile Pengguna</Text>
      </View>

      {/* Profil Pengguna */}
      <View style={styles.card}>
        <Image source={{ uri: user.imageUrl }} style={styles.image} />
        <Text style={styles.name}>{user.nama}</Text>
        <Text style={styles.nim}>{user.nim}</Text>
        <Text style={styles.kel}>{user.kel}</Text>
        <TouchableOpacity onPress={handleGithubLink}>
          <Text style={styles.githubLink}>GitHub Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Informasi Tambahan */}
      <View style={styles.card}>
        <Text style={styles.text}>TA PPB Teknik Komputer angkatan 2022</Text>
      </View>

      {/* Tombol Log Out */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1B4332', // Warna background hijau gelap
  },
  appNameContainer: {
    marginBottom: 20,
  },
  appName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4B5320', // Warna hijau tua
  },
  card: {
    width: 320,
    padding: 25,
    backgroundColor: 'rgba(245, 222, 179, 0.7)', // Mengatur card menjadi transparan
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4B5320',
    marginBottom: 4,
  },
  nim: {
    fontSize: 16,
    color: '#555',
  },
  kel: {
    fontSize: 17,
    color: '#555',
    marginBottom: 8,
  },
  githubLink: {
    fontSize: 16,
    color: '#1E90FF',
    textDecorationLine: 'underline',
    marginTop: 8,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
  logoutButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ff4500', // Warna latar belakang tombol Log Out
    borderRadius: 5,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
