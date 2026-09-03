import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    useWindowDimensions,
} from 'react-native';
import { useNavigation } from 'expo-router';
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import theme from '@/src/config/theme.config';

export interface CustomHeaderProps {
    onSearchPress?: () => void;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ onSearchPress }) => {
    const navigation = useNavigation<any>();
    const { width: windowWidth } = useWindowDimensions();

    // Responsive logo width calculation
    const logoWidth = Math.min(260, Math.max(160, windowWidth * 0.55));

    return (
        <SafeAreaView style={styles.safeArea} edges={['top']}>
            <View style={styles.header}>
                {/* Menu Button */}
                <TouchableOpacity
                    onPress={() => navigation.dispatch({ type: 'OPEN_DRAWER' })}
                    style={styles.iconButton}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    accessibilityLabel="Open drawer menu"
                >
                    <Ionicons size={28} name="menu-outline" color={theme.colors.textInverse} />
                </TouchableOpacity>

                {/* Brand Logo */}
                <View style={styles.logoContainer}>
                    <Image
                        source={require('@/assets/icons/BWstoryLogo.png')}
                        style={[styles.logo, { width: logoWidth }]}
                        contentFit="contain"
                        tintColor={theme.colors.textInverse}
                    />
                </View>

                {/* Search Action */}
                <TouchableOpacity
                    onPress={onSearchPress}
                    style={styles.iconButton}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    accessibilityLabel="Search"
                >
                    <EvilIcons size={30} name="search" color={theme.colors.textInverse} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: theme.colors.primaryDark,
    },
    header: {
        height: theme.layout.headerHeight,
        width: '100%',
        backgroundColor: theme.colors.primary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: theme.spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.08)',
    },
    iconButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: 38,
    },
});

export default CustomHeader;
