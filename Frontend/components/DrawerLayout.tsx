import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Animated, Dimensions, Modal } from 'react-native';
import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

import { SideMenu } from './SideMenu';

type DrawerLayoutProps = {
  children: React.ReactNode;
};

export function DrawerLayout({ children }: DrawerLayoutProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  
  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, { borderBottomColor: colorScheme === 'dark' ? '#333' : '#e0e0e0', backgroundColor: colors.background }]}>
        <TouchableOpacity onPress={openDrawer} style={styles.profileButton}>
          <Image source={require('../assets/images/profile-icon.svg')} style={styles.profileIcon} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Image source={require('../assets/images/internship-logo.svg')} style={styles.logo} />
        </View>
        <View style={styles.languageToggle}>
          <View style={[styles.languageButton, { backgroundColor: colorScheme === 'dark' ? '#333' : '#f0f0f0' }]}>
            <View style={styles.languageButtonInner}>
              <View style={[styles.languageActive, { backgroundColor: colors.primary }]}>
                <View style={styles.languageTextContainer}>
                  <View style={[styles.languageText, { color: colorScheme === 'dark' ? '#fff' : '#000' }]}>A</View>
                </View>
              </View>
              <View style={styles.languageInactive}>
                <View style={styles.languageTextContainer}>
                  <View style={[styles.languageText, { color: colorScheme === 'dark' ? '#fff' : '#000' }]}>अ</View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.content}>{children}</View>

      <Modal
        visible={isDrawerOpen}
        transparent
        animationType="fade"
        onRequestClose={closeDrawer}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.drawerContainer}>
            <SideMenu onClose={closeDrawer} />
            <TouchableOpacity style={styles.closeArea} onPress={closeDrawer} />
          </View>
        </View>
      </Modal>

      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    marginRight: 12,
  },
  profileIcon: {
    width: 40,
    height: 40,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  logo: {
    width: 120,
    height: 40,
  },
  languageToggle: {
    marginLeft: 12,
  },
  languageButton: {
    width: 60,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#f0f0f0',
    padding: 2,
  },
  languageButtonInner: {
    flexDirection: 'row',
    flex: 1,
    borderRadius: 13,
    overflow: 'hidden',
  },
  languageActive: {
    flex: 1,
    backgroundColor: '#2196F3',
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageInactive: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  content: {
    flex: 1,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  drawerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  closeArea: {
    flex: 1,
  },
});