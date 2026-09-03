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
            <Text style={[styles.number, active && styles.activeText]}>{value}</Text>
            <Text style={styles.label}>{label}</Text>
        </Component>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: theme.spacing.sm,
        paddingHorizontal: theme.spacing.md,
        borderRadius: theme.borderRadius.md,
        minWidth: 65,
    },
    activeContainer: {
        backgroundColor: theme.colors.surfaceHighlight,
    },
    number: {
        fontSize: theme.typography.fontSize.base,
        fontWeight: theme.typography.fontWeight.bold,
        color: theme.colors.textPrimary,
        marginBottom: 2,
    },
    activeText: {
        color: theme.colors.primary,
    },
    label: {
        fontSize: theme.typography.fontSize.xs,
        color: theme.colors.textMuted,
        textAlign: 'center',
        fontWeight: theme.typography.fontWeight.medium,
    },
});

export default StatBox;
