import React from 'react';
import { StyleSheet, View, Text, ViewStyle } from 'react-native';
import { Image } from 'expo-image';
import theme from '@/src/config/theme.config';
import { AvatarProps, AvatarSize } from '@/src/types';

export type { AvatarProps, AvatarSize };

const sizeMap: Record<AvatarSize, number> = {
    xs: 28,
    sm: 36,
    md: 48,
    lg: 72,
    xl: 90,
};

export const Avatar: React.FC<AvatarProps> = ({
    source,
    name,
    size = 'md',
    borderWidth = 0,
    borderColor = theme.colors.surface,
    style,
}) => {
    const dimension = typeof size === 'number' ? size : sizeMap[size] || 48;
    const borderRadius = dimension / 2;

    const getInitials = (fullName?: string): string => {
        if (!fullName) return '?';
        const parts = fullName.trim().split(' ');
        if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
        return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
    };

    const containerStyle: ViewStyle = {
        width: dimension,
        height: dimension,
        borderRadius,
        borderWidth,
        borderColor,
    };

    if (source) {
        const imageSource = typeof source === 'string' ? { uri: source } : source;
        return (
            <View style={[styles.container, containerStyle, style]}>
                <Image
                    source={imageSource}
                    style={styles.image}
                    contentFit="cover"
                    transition={200}
                />
            </View>
        );
    }

    return (
        <View style={[styles.container, styles.fallbackContainer, containerStyle, style]}>
            <Text style={[styles.initials, { fontSize: dimension * 0.4 }]}>
                {getInitials(name)}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.surfaceMuted,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    fallbackContainer: {
        backgroundColor: theme.colors.primary,
    },
    initials: {
        color: theme.colors.textInverse,
        fontWeight: theme.typography.fontWeight.bold,
    },
});

export default Avatar;
