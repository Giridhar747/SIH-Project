import React from 'react';
import { StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';

import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

type MenuItemProps = {
  icon: React.ReactNode;
  label: string;
  onPress: () => void;
};

const MenuItem = ({ icon, label, onPress }: MenuItemProps) => {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuIcon}>{icon}</View>
      <ThemedText style={styles.menuLabel}>{label}</ThemedText>
    </TouchableOpacity>
  );
};

type SectionDividerProps = {
  title?: string;
};

const SectionDivider = ({ title }: SectionDividerProps) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  
  return (
    <View style={styles.dividerContainer}>
      {title ? <ThemedText style={[styles.dividerText, { color: colors.text }]}>{title}</ThemedText> : null}
      <View style={[styles.divider, { backgroundColor: colorScheme === 'dark' ? '#333' : '#e0e0e0' }]} />
    </View>
  );
};

type SideMenuProps = {
  onClose: () => void;
};

export function SideMenu({ onClose }: SideMenuProps) {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <ThemedView style={[styles.container, { borderRightColor: colorScheme === 'dark' ? '#333' : '#e0e0e0' }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose} style={[styles.closeButton, { backgroundColor: colors.accent }]}>
          <ThemedText style={styles.closeButtonText}>✕</ThemedText>
        </TouchableOpacity>
      </View>

      <View style={styles.logoContainer}>
        <Image source={require('../assets/images/internship-logo.svg')} style={styles.logo} />
      </View>

      <ScrollView style={styles.menuContainer}>
        <MenuItem
          icon={<ThemedText style={styles.iconText}>👤</ThemedText>}
          label="Register"
          onPress={() => {
            onClose();
            // Navigate to register screen
            router.push('/register');
          }}
        />

        <MenuItem
          icon={<ThemedText style={styles.iconText}>🔑</ThemedText>}
          label="Login"
          onPress={() => {
            onClose();
            // Navigate to login screen
            router.push('/login');
          }}
        />

        <SectionDivider />

        <MenuItem
          icon={<ThemedText style={styles.iconText}>🎬</ThemedText>}
          label="Guidance Video"
          onPress={() => {
            onClose();
            // Navigate to guidance video screen
            router.push('/guidance');
          }}
        />

        <MenuItem
          icon={<ThemedText style={styles.iconText}>📋</ThemedText>}
          label="Guidelines"
          onPress={() => {
            onClose();
            // Navigate to guidelines screen
            router.push('/guidelines');
          }}
        />

        <MenuItem
          icon={<ThemedText style={styles.iconText}>📚</ThemedText>}
          label="Manuals"
          onPress={() => {
            onClose();
            // Navigate to manuals screen
            router.push('/manuals');
          }}
        />

        <SectionDivider title="HELP & SUPPORT" />

        <MenuItem
          icon={<ThemedText style={styles.iconText}>ℹ️</ThemedText>}
          label="Help Center"
          onPress={() => {
            onClose();
            // Navigate to help center screen
            router.push('/help');
          }}
        />

        <MenuItem
          icon={<ThemedText style={styles.iconText}>⚠️</ThemedText>}
          label="Raise Request"
          onPress={() => {
            onClose();
            // Navigate to raise request screen
            router.push('/raise-request');
          }}
        />

        <MenuItem
          icon={<ThemedText style={styles.iconText}>🔍</ThemedText>}
          label="Track Request"
          onPress={() => {
            onClose();
            // Navigate to track request screen
            router.push('/track-request');
          }}
        />
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '80%',
    maxWidth: 300,
    borderRightWidth: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 16,
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 60,
  },
  menuContainer: {
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  menuIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  iconText: {
    fontSize: 20,
  },
  menuLabel: {
    fontSize: 16,
  },
  dividerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  dividerText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
    opacity: 0.7,
  },
  divider: {
    height: 1,
  },
});