import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <ScrollView style={styles.container}>
      {/* Welcome Section */}
      <ThemedView style={styles.welcomeSection}>
        <ThemedText type="title">Hello User! <ThemedText style={styles.waveEmoji}>👋</ThemedText></ThemedText>
        <TouchableOpacity>
          <ThemedText style={[styles.loginLink, { color: colors.primary }]}>Login Now</ThemedText>
          <ThemedText> to land at your dream internship</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      {/* Bank Account Section */}
      <ThemedView style={[styles.bankAccountCard, { backgroundColor: colors.lightCyan }]}>
        <View style={styles.bankAccountContent}>
          <View>
            <ThemedText style={styles.bankAccountTitle}>Seed your Bank Account</ThemedText>
            <ThemedText style={styles.bankAccountTitle}>with Aadhaar</ThemedText>
            <ThemedText style={styles.bankAccountTitle}>to Receive Financial Assistance.</ThemedText>
          </View>
          <Image 
            source={require('@/assets/images/bank-account.svg')} 
            style={styles.bankAccountImage} 
            contentFit="contain"
          />
        </View>
        <TouchableOpacity style={[styles.checkStatusButton, { backgroundColor: colors.secondary }]}>
          <ThemedText style={styles.checkStatusText}>▶▶ Check Status</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <View style={[styles.statsCard, { backgroundColor: colors.lightBlue }]}>
          <ThemedText style={[styles.statsNumber, { color: colors.primary }]}>119.4k</ThemedText>
          <ThemedText style={styles.statsLabel}>Internships</ThemedText>
        </View>
        
        <View style={[styles.statsCard, { backgroundColor: colors.lightGreen }]}>
          <ThemedText style={[styles.statsNumber, { color: colors.secondary }]}>7.1k</ThemedText>
          <ThemedText style={styles.statsLabel}>Interns</ThemedText>
        </View>
        
        <View style={[styles.statsCard, { backgroundColor: colors.lightPurple }]}>
          <ThemedText style={[styles.statsNumber, { color: '#7B1FA2' }]}>36</ThemedText>
          <ThemedText style={styles.statsLabel}>States</ThemedText>
        </View>
        
        <View style={[styles.statsCard, { backgroundColor: colors.lightYellow }]}>
          <ThemedText style={[styles.statsNumber, { color: colors.warning }]}>327</ThemedText>
          <ThemedText style={styles.statsLabel}>Companies</ThemedText>
        </View>
      </View>

      {/* Eligibility Section */}
      <ThemedView style={styles.sectionTitle}>
        <ThemedText style={styles.sectionTitleText}>Can I Apply ?</ThemedText>
      </ThemedView>

      <ThemedView style={[styles.eligibilityCard, { backgroundColor: colors.lightCyan }]}>
        <View style={styles.eligibilityContent}>
          <View>
            <ThemedText style={styles.eligibilityText}>No family member (self,</ThemedText>
            <ThemedText style={styles.eligibilityText}>spouse,or parents) should hold</ThemedText>
            <ThemedText style={styles.eligibilityText}>a <ThemedText style={styles.boldText}>permanent government job.</ThemedText></ThemedText>
          </View>
          <Image 
            source={require('@/assets/images/eligibility-card.svg')} 
            style={styles.eligibilityImage} 
            contentFit="contain"
          />
        </View>
      </ThemedView>

      {/* Benefits Section */}
      <ThemedView style={styles.sectionTitle}>
        <ThemedText style={styles.sectionTitleText}>Benefits</ThemedText>
      </ThemedView>

      <ThemedView style={styles.benefitsCard}>
        <View style={[styles.benefitsContent, { 
          backgroundColor: colorScheme === 'dark' ? '#4A1639' : 'rgba(233, 30, 99, 0.8)' 
        }]}>
          <View>
            <ThemedText style={styles.benefitsText}>Network with industry</ThemedText>
            <ThemedText style={styles.benefitsText}>professionals of top</ThemedText>
            <ThemedText style={styles.benefitsText}>companies.</ThemedText>
          </View>
          <Image 
            source={require('@/assets/images/benefits-card.svg')} 
            style={styles.benefitsImage} 
            contentFit="contain"
          />
        </View>
      </ThemedView>

      {/* Bottom padding */}
      <View style={styles.bottomPadding} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeSection: {
    padding: 16,
  },
  waveEmoji: {
    fontSize: 32,
  },
  loginLink: {
    fontWeight: 'bold',
  },
  bankAccountCard: {
    margin: 16,
    borderRadius: 16,
    overflow: 'hidden',
  },
  bankAccountContent: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bankAccountTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333366',
  },
  bankAccountImage: {
    width: 120,
    height: 120,
  },
  checkStatusButton: {
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkStatusText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 8,
  },
  statsCard: {
    width: '48%',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  statsNumber: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  statsLabel: {
    fontSize: 16,
    color: '#333333',
  },
  sectionTitle: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  sectionTitleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  eligibilityCard: {
    margin: 16,
    borderRadius: 16,
    overflow: 'hidden',
  },
  eligibilityContent: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eligibilityText: {
    fontSize: 16,
    color: '#333333',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  eligibilityImage: {
    width: 100,
    height: 100,
  },
  benefitsCard: {
    margin: 16,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  benefitsContent: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 16,
  },
  benefitsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  benefitsImage: {
    width: 100,
    height: 100,
  },
  bottomPadding: {
    height: 40,
  },
});
