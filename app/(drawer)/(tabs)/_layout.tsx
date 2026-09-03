import React from 'react';
import { Platform } from 'react-native';
import { Tabs } from 'expo-router';
import { FontAwesome6, Fontisto } from "@expo/vector-icons";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomHeader from "@/src/components/customHeader";
import theme from "@/src/config/theme.config";

export default function TabLayout() {
    const insets = useSafeAreaInsets();
    const isAndroid = Platform.OS === 'android';

    // Calculate safe padding for both iOS home indicator and Android navigation bars
    const bottomPadding = insets.bottom > 0 ? insets.bottom : (isAndroid ? 8 : 12);
    const tabHeight = 56 + bottomPadding;

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.textMuted,
                tabBarStyle: {
                    backgroundColor: theme.colors.surface,
                    borderTopColor: theme.colors.border,
                    borderTopWidth: 1,
                    height: tabHeight,
                    paddingBottom: bottomPadding,
                    paddingTop: 6,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: -2 },
                    shadowOpacity: 0.05,
                    shadowRadius: 4,
                    elevation: 8,
                },
                tabBarItemStyle: {
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                    marginTop: 2,
                },
                header: () => <CustomHeader />,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Discover',
                    tabBarIcon: ({ color, focused }) => (
                        <Fontisto
                            size={focused ? 21 : 19}
                            name="compass"
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color, focused }) => (
                        <FontAwesome6
                            size={focused ? 21 : 19}
                            name="circle-user"
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
