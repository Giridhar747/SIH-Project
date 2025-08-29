import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function LoginScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: 'Login' }} />
      <View style={styles.content}>
        <ThemedText style={styles.title}>Login</ThemedText>
        
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder="Email or Username"
            placeholderTextColor={colors.textSecondary}
            style={[styles.input, { borderColor: colors.border, color: colors.text }]}
          />
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder="Password"
            placeholderTextColor={colors.textSecondary}
            secureTextEntry
            style={[styles.input, { borderColor: colors.border, color: colors.text }]}
          />
        </View>
        
        <TouchableOpacity style={[styles.button, { backgroundColor: colors.primary }]}>
          <ThemedText style={styles.buttonText}>Login</ThemedText>
        </TouchableOpacity>
        
        <View style={styles.footer}>
          <ThemedText>Don't have an account? </ThemedText>
          <ThemedText type="link">Register</ThemedText>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 24,
  },
});