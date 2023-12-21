import React, { useState, useEffect } from 'react';
import {
  Image,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Alert,
  ScrollView,
  FlatList,
  TextInput,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { images, icons, colors, fontSizes } from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

import { population as PopulationRepository, user as UserRepository } from '../../repositories/index';
import { convertDateTimeToString } from '../../util/datetime';
import SpinnerOverlay from 'react-native-loading-spinner-overlay';
const Profile = (props: any) => {
  const [user, setUser] = useState<{
    dateOfBirth?: string;
    email?: string;
    gender?: string;
    userId?: string;
    address?: string;
    name?: string;
    username?: string;
    url?: string;
    phone?: string;
    registeredDate?: string;
  }>({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    UserRepository.getUserDetails().then((responseUser:any) => {
      if (responseUser) {
        setUser(responseUser);
        setLoading(false); 
      }
    });
  }, []);

  const {
    dateOfBirth,
    email,
    gender,
    userId,
    address,
    name,
    username,
    url,
    phone,
    registeredDate,
  } = user || {};
  if (loading) {
    return (
      <View>
        <SpinnerOverlay
          visible={loading}
          textContent={'Đang tải...'}
          animation='fade'
        />
      </View>
    ); // Hiển thị thông báo tải dữ liệu
  }
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.profileImage} source={{ uri: url }} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Information</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.text}>{name}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Date of Birth:</Text>
          <Text style={styles.text}>{dateOfBirth ? convertDateTimeToString(dateOfBirth) : ''}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Gender:</Text>
          <Text style={styles.text}>{gender}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.text}>{email}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Information</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.text}>{address}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.text}>{phone}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Information</Text>

        <View style={styles.row}>
          <Text style={styles.label}>User ID:</Text>
          <Text style={styles.text}>{userId}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Registered Date:</Text>
          <Text style={styles.text}>{registeredDate ? convertDateTimeToString(registeredDate) : ''}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingStart: 20,
    backgroundColor: 'white',
  },
  profileImage: {
    width: 160,
    height: 160,
    resizeMode: 'cover',
    borderRadius: 80,
    alignSelf: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: fontSizes.h2,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
    width: 100,
  },
  text: {
    flex: 1,
  },
});

export default Profile;