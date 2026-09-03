import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, StatusBar, Animated } from 'react-native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { Image } from 'expo-image';

// Prevent native splash screen from hiding immediately
SplashScreen.preventAutoHideAsync().catch(() => {});

export default function RootLayout() {
    const [isAppReady, setIsAppReady] = useState(false);
    const fadeAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        async function prepareApp() {
            try {
                // Ensure native splash is dismissed so only our custom overlay handles the display
                await SplashScreen.hideAsync().catch(() => {});
                // Keep splash visible for 1.2s for clean brand presence
                await new Promise((resolve) => setTimeout(resolve, 1200));
            } catch {
                // Ignore prepare errors
            } finally {
                // Smooth fade-out animation
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 350,
                    useNativeDriver: true,
                }).start(() => {
                    setIsAppReady(true);
                });
            }
        }

        prepareApp();
    }, [fadeAnim]);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
            </Stack>

            {/* Custom Smooth Splash Screen Overlay */}
            {!isAppReady && (
                <Animated.View style={[styles.splashContainer, { opacity: fadeAnim }]}>
                    <Image
                        source={require('@/assets/icons/BWstoryLogoDark.png')}
                        style={styles.splashLogo}
                        contentFit="contain"
                        priority="high"
                    />
                </Animated.View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    splashContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
    },
    splashLogo: {
        width: 250,
        height: 65,
    },
});
