import React from 'react';
import {
    Drawer,
    DrawerContentScrollView,
    DrawerItem,
    type DrawerContentComponentProps,
} from "expo-router/drawer";
import { FontAwesome, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { Image } from "expo-image";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Avatar from "@/src/components/ui/avatar";
import theme from "@/src/config/theme.config";

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
    const insets = useSafeAreaInsets();
    const { width: windowWidth } = useWindowDimensions();
    const drawerContentWidth = Math.min(320, windowWidth * 0.8);

    return (
        <View style={styles.drawerContainer}>
            <View style={[styles.statusBarBg, { height: insets.top }]} />
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={[
                    styles.scrollContentContainer,
                    { paddingTop: insets.top },
                ]}
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
            >
                {/* User Header Profile Card */}
                <View style={[styles.userInfo, { width: drawerContentWidth }]}>
                    <View style={styles.bgWrapper}>
                        <Image
                            source={{
                                uri: 'https://static.vecteezy.com/system/resources/thumbnails/006/654/400/small_2x/abstract-blue-digital-particles-wave-and-digital-data-network-connections-for-technology-background-concept-communication-or-social-media-connection-background-photo.jpg',
                            }}
                            style={styles.bgImg}
                            contentFit="cover"
                            transition={300}
                        />
                        <View style={styles.bgOverlay} />
                    </View>

                    <View style={styles.headerContent}>
                        <Avatar
                            source={require('@/assets/icons/user.png')}
                            name="Krishna Soni"
                            size="lg"
                            borderWidth={2}
                            borderColor={theme.colors.surface}
                            style={styles.userProfile}
                        />
                        <Text style={styles.userNameText}>Krishna Soni</Text>
                        <View style={styles.locationRow}>
                            <FontAwesome size={14} name="location-arrow" color={theme.colors.textInverse} />
                            <Text style={styles.locationText}>Indore, Madhya Pradesh</Text>
                        </View>
                    </View>
                </View>

                {/* Navigation Items */}
                <View style={[styles.drawerItemsContainer, { width: drawerContentWidth }]}>
                    <DrawerItem
                        icon={({ color }) => (
                            <Ionicons size={22} name="home-outline" color={color || theme.colors.primary} />
                        )}
                        label="Home"
                        labelStyle={styles.drawerLabel}
                        style={styles.drawerItem}
                        onPress={() => {
                            router.push("/(drawer)/(tabs)");
                        }}
                    />

                    <DrawerItem
                        icon={({ color }) => (
                            <SimpleLineIcons size={20} name="user" color={color || theme.colors.primary} />
                        )}
                        label="Profile"
                        labelStyle={styles.drawerLabel}
                        style={styles.drawerItem}
                        onPress={() => {
                            router.push("/(drawer)/(tabs)/profile");
                        }}
                    />
                </View>
            </DrawerContentScrollView>
        </View>
    );
};

export default function Layout() {
    const { width: windowWidth } = useWindowDimensions();
    const responsiveDrawerWidth = Math.min(320, windowWidth * 0.8);

    return (
        <Drawer
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    width: responsiveDrawerWidth,
                    backgroundColor: theme.colors.surface,
                },
                drawerActiveTintColor: theme.colors.primary,
                drawerInactiveTintColor: theme.colors.textSecondary,
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        />
    );
}

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        backgroundColor: theme.colors.surface,
    },
    statusBarBg: {
        backgroundColor: theme.colors.primaryDark,
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
    },
    scrollView: {
        flex: 1,
        marginTop: 0,
        paddingTop: 0,
    },
    scrollContentContainer: {
        flexGrow: 1,
        paddingHorizontal: 0,
        paddingBottom: theme.spacing.xl,
        alignItems: 'center',
    },
    userInfo: {
        height: 180,
        borderBottomRightRadius: theme.borderRadius.lg,
        position: 'relative',
        overflow: 'hidden',
    },
    bgWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: theme.colors.primaryDark,
    },
    bgImg: {
        width: '100%',
        height: '100%',
    },
    bgOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(16, 53, 64, 0.65)',
    },
    headerContent: {
        padding: theme.spacing.lg,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        justifyContent: 'center',
    },
    userProfile: {
        marginBottom: theme.spacing.sm,
    },
    userNameText: {
        color: theme.colors.textInverse,
        fontSize: theme.typography.fontSize.md,
        fontWeight: theme.typography.fontWeight.bold,
    },
    locationRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: theme.spacing.xs + 2,
        marginTop: 2,
    },
    locationText: {
        color: 'rgba(255, 255, 255, 0.85)',
        fontSize: theme.typography.fontSize.xs,
        fontWeight: theme.typography.fontWeight.medium,
    },
    drawerItemsContainer: {
        flex: 1,
        paddingTop: theme.spacing.sm,
        paddingHorizontal: theme.spacing.sm,
    },
    drawerItem: {
        borderRadius: theme.borderRadius.md,
        paddingVertical: 2,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.borderLight,
        marginVertical: 2,
    },
    drawerLabel: {
        color: theme.colors.textPrimary,
        fontSize: theme.typography.fontSize.base,
        fontWeight: theme.typography.fontWeight.medium,
    },
});
