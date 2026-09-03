import React, { useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { Image } from 'expo-image';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync().catch(() => {});

export default function RootLayout() {
    const [isAppReady, setIsAppReady] = useState(false);

    useEffect(() => {
        async function prepareApp() {
            try {
                // Simulate initial asset loading / initialization
                await new Promise((resolve) => setTimeout(resolve, 800));
            } catch {
                // Ignore prepare errors
            } finally {
                setIsAppReady(true);
                await SplashScreen.hideAsync().catch(() => {});
            }
        }

        prepareApp();
    }, []);

    if (!isAppReady) {
        return (
            <View style={styles.splashContainer}>
                <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
                <Image
                    source={require('@/assets/icons/BWstoryLogoDark.png')}
                    style={styles.splashLogo}
                    contentFit="contain"
                    priority="high"
                />
            </View>
        );
    }

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        </Stack>
    );
}

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    splashLogo: {
        width: 260,
        height: 70,
    },
});
