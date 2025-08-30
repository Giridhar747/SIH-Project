import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SidebarMenu = ({ isVisible, onClose }) => {
  const navigation = useNavigation();

  if (!isVisible) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.sidebarContainer}>
        {/* Close Button */}
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <View style={styles.closeIcon}>
            <Text style={styles.closeIconText}>✕</Text>
          </View>
        </TouchableOpacity>

        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image 
            source={require('../assets/icon.png')} 
            style={styles.logo} 
          />
          <Text style={styles.logoText}>PMInternship</Text>
          <Text style={styles.tagline}>LEARN FROM THE BEST</Text>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Menu Items */}
        <ScrollView style={styles.menuItems}>
          {/* Account Section */}
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Text>👤</Text>
            </View>
            <Text style={styles.menuText}>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Text>👤</Text>
            </View>
            <Text style={styles.menuText}>Login</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Resources Section */}
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Text>🎓</Text>
            </View>
            <Text style={styles.menuText}>Guidance Video</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Text>📋</Text>
            </View>
            <Text style={styles.menuText}>Guidelines</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Text>📚</Text>
            </View>
            <Text style={styles.menuText}>Manuals</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Text>🔍</Text>
            </View>
            <Text style={styles.menuText}>Recommended Internship</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Text>❓</Text>
            </View>
            <Text style={styles.menuText}>How Recommendation Works</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Help & Support Section */}
          <Text style={styles.sectionTitle}>HELP & SUPPORT</Text>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Text>ℹ️</Text>
            </View>
            <Text style={styles.menuText}>Help Center</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Text>⚠️</Text>
            </View>
            <Text style={styles.menuText}>Raise Request</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Text>📊</Text>
            </View>
            <Text style={styles.menuText}>Track Request</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1000,
  },
  sidebarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '80%',
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    zIndex: 1001,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1002,
  },
  closeIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FF7F50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIconText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  logoText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  tagline: {
    fontSize: 12,
    color: '#666',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 15,
  },
  menuItems: {
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  menuIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  menuText: {
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
    marginVertical: 10,
  },
});

export default SidebarMenu;