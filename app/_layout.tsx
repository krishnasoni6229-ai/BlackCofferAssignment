import React, { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

// Prevent the native splash screen from auto hiding before app is ready
SplashScreen.preventAutoHideAsync().catch(() => {});

export default function RootLayout() {
    const [isAppReady, setIsAppReady] = useState(false);

    useEffect(() => {
        async function prepareApp() {
            try {
                // Short wait to allow navigation and child components to initialize
                await new Promise((resolve) => setTimeout(resolve, 400));
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
        return null;
    }

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        </Stack>
    );
}
