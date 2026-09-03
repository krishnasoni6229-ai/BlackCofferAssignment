import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import theme from '@/src/config/theme.config';
import { StatBoxProps } from '@/src/types';

export type { StatBoxProps };

export const StatBox: React.FC<StatBoxProps> = ({
    value,
    label,
    onPress,
    active = false,
    style,
}) => {
    const Component = onPress ? TouchableOpacity : View;

    return (
        <Component
            style={[styles.container, active && styles.activeContainer, style]}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <Text style={[styles.number, active && styles.activeText]} numberOfLines={1}>
                {value}
            </Text>
            <Text style={styles.label} numberOfLines={1}>
                {label}
            </Text>
        </Component>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 4,
        paddingHorizontal: 2,
        borderRadius: theme.borderRadius.sm,
        minWidth: 0,
    },
    activeContainer: {
        backgroundColor: theme.colors.surfaceHighlight,
    },
    number: {
        fontSize: 15,
        fontWeight: theme.typography.fontWeight.bold,
        color: theme.colors.textPrimary,
        marginBottom: 2,
        textAlign: 'center',
    },
    activeText: {
        color: theme.colors.primary,
    },
    label: {
        fontSize: 11,
        color: theme.colors.textMuted,
        textAlign: 'center',
        fontWeight: theme.typography.fontWeight.medium,
    },
});

export default StatBox;
