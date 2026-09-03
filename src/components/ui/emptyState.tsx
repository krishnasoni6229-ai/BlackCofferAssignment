import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '@/src/config/theme.config';
import Button from '@/src/components/ui/button';
import { EmptyStateProps } from '@/src/types';

export type { EmptyStateProps };

export const EmptyState: React.FC<EmptyStateProps> = ({
    title = 'No items found',
    description,
    iconName = 'file-tray-outline',
    actionLabel,
    onAction,
    style,
}) => {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.iconCircle}>
                <Ionicons name={iconName} size={40} color={theme.colors.textMuted} />
            </View>
            <Text style={styles.title}>{title}</Text>
            {description && <Text style={styles.description}>{description}</Text>}
            {actionLabel && onAction && (
                <Button
                    title={actionLabel}
                    size="sm"
                    onPress={onAction}
                    style={styles.button}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: theme.spacing.xxxl,
        paddingHorizontal: theme.spacing.xl,
    },
    iconCircle: {
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: theme.colors.surfaceHighlight,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: theme.spacing.md,
    },
    title: {
        fontSize: theme.typography.fontSize.lg,
        fontWeight: theme.typography.fontWeight.bold,
        color: theme.colors.textPrimary,
        textAlign: 'center',
        marginBottom: theme.spacing.xs,
    },
    description: {
        fontSize: theme.typography.fontSize.sm,
        color: theme.colors.textSecondary,
        textAlign: 'center',
        maxWidth: 280,
        lineHeight: theme.typography.lineHeight.base,
        marginBottom: theme.spacing.md,
    },
    button: {
        marginTop: theme.spacing.sm,
    },
});

export default EmptyState;
