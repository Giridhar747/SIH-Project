import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import SidebarMenu from './SidebarMenu';

const HomeScreen = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container}>
        {/* Header with profile */}
        <View style={styles.header}>
          <TouchableOpacity onPress={toggleSidebar} style={styles.profileContainer}>
            <Image 
              source={require('../assets/icon.png')} 
              style={styles.profileImage} 
            />
            <Text style={styles.headerTitle}>Home</Text>
          </TouchableOpacity>
          <View style={styles.languageSelector}>
            <Text style={styles.languageText}>A</Text>
            <Text style={styles.languageText}>अ</Text>
          </View>
        </View>
        
        {/* Welcome message */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeText}>Hello User! 👋</Text>
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Login Now</Text>
            <Text style={styles.regularText}> to land at your dream internship</Text>
          </View>
        </View>
        
        {/* Offer Card */}
        <View style={styles.offerCard}>
          <View style={styles.offerTextContainer}>
            <Text style={styles.offerTitle}>Received Offer</Text>
            <Text style={styles.offerSubtitle}>Accept and begin your internship journey!</Text>
            <TouchableOpacity style={styles.statusButton}>
              <Text style={styles.statusButtonText}>Check Status</Text>
            </TouchableOpacity>
          </View>
          <Image 
            source={require('../assets/icon.png')} 
            style={styles.offerImage} 
          />
        </View>
        
        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={[styles.statBox, styles.internshipsBox]}>
            <Text style={styles.statNumber}>119.4k</Text>
            <Text style={styles.statLabel}>Internships</Text>
          </View>
          <View style={[styles.statBox, styles.internsBox]}>
            <Text style={styles.statNumber}>7.1k</Text>
            <Text style={styles.statLabel}>Interns</Text>
          </View>
          <View style={[styles.statBox, styles.statesBox]}>
            <Text style={styles.statNumber}>36</Text>
            <Text style={styles.statLabel}>States</Text>
          </View>
          <View style={[styles.statBox, styles.companiesBox]}>
            <Text style={styles.statNumber}>327</Text>
            <Text style={styles.statLabel}>Companies</Text>
          </View>
        </View>
        
        {/* Apply Section */}
        <Text style={styles.sectionTitle}>Can I Apply ?</Text>
        <View style={styles.applyCard}>
          <Text style={styles.applyText}>You must not be enrolled in full-time education.</Text>
          <Image 
            source={require('../assets/icon.png')} 
            style={styles.applyImage} 
          />
        </View>
        
        {/* Pagination dots */}
        <View style={styles.paginationDots}>
          <View style={[styles.dot, styles.activeDot]}></View>
          <View style={styles.dot}></View>
          <View style={styles.dot}></View>
          <View style={styles.dot}></View>
          <View style={styles.dot}></View>
        </View>
        
        {/* Benefits Section */}
        <Text style={styles.sectionTitle}>Benefits</Text>
        <View style={styles.benefitsCard}>
          <Text style={styles.benefitsTitle}>Network with industry professionals of top</Text>
          <Image 
            source={require('../assets/icon.png')} 
            style={styles.benefitsImage} 
          />
        </View>
      </ScrollView>
      
      {/* Sidebar Menu */}
      <SidebarMenu 
        isVisible={sidebarVisible} 
        onClose={() => setSidebarVisible(false)} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  languageSelector: {
    flexDirection: 'row',
    backgroundColor: '#4A90E2',
    borderRadius: 15,
    padding: 5,
  },
  languageText: {
    color: 'white',
    marginHorizontal: 5,
    fontWeight: 'bold',
  },
  welcomeSection: {
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginText: {
    color: '#4A90E2',
    fontWeight: 'bold',
    fontSize: 16,
  },
  regularText: {
    fontSize: 16,
  },
  offerCard: {
    backgroundColor: '#E6F7FF',
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  offerTextContainer: {
    flex: 1,
  },
  offerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333366',
    marginBottom: 5,
  },
  offerSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  statusButton: {
    backgroundColor: '#2E8B57',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: 'flex-start',
  },
  statusButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  offerImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statBox: {
    width: '23%',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  internshipsBox: {
    backgroundColor: '#E6F0FF',
  },
  internsBox: {
    backgroundColor: '#E6FFE6',
  },
  statesBox: {
    backgroundColor: '#F5E6FF',
  },
  companiesBox: {
    backgroundColor: '#FFF5E6',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  applyCard: {
    backgroundColor: '#E6FFE6',
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  applyText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    width: '60%',
  },
  applyImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#DDD',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#4A90E2',
  },
  benefitsCard: {
    backgroundColor: 'linear-gradient(to right, #FF5A5F, #C13584)',
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  benefitsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    width: '60%',
  },
  benefitsImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default HomeScreen;