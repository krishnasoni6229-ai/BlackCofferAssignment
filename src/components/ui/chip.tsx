import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewStyle,
    TextStyle,
} from 'react-native';
import theme from '@/src/config/theme.config';
import { ChipProps } from '@/src/types';

export type { ChipProps };

export const Chip: React.FC<ChipProps> = ({
    label,
    selected,
    active,
    icon,
    badge,
    size = 'md',
    onPress,
    disabled = false,
    style,
    textStyle,
    activeBackgroundColor = theme.colors.primary,
    inactiveBackgroundColor = theme.colors.surface,
    activeTextColor = theme.colors.textInverse,
    inactiveTextColor = theme.colors.primary,
}) => {
    const isSelected = selected ?? active ?? false;

    // Size-based padding and font sizing
    const getSizeStyle = (): { container: ViewStyle; text: TextStyle } => {
        switch (size) {
            case 'sm':
                return {
                    container: {
                        paddingVertical: 5,
                        paddingHorizontal: 16,
                        borderRadius: 20,
                    },
                    text: {
                        fontSize: 13,
                        fontWeight: '600',
                    },
                };
            case 'lg':
                return {
                    container: {
                        paddingVertical: 10,
                        paddingHorizontal: 26,
                        borderRadius: 26,
                    },
                    text: {
                        fontSize: 16,
                        fontWeight: '700',
                    },
                };
            case 'md':
            default:
                return {
                    container: {
                        paddingVertical: 7,
                        paddingHorizontal: 20,
                        borderRadius: 22,
                    },
                    text: {
                        fontSize: 14,
                        fontWeight: '600',
                    },
                };
        }
    };

    const sizeStyle = getSizeStyle();

    return (
        <TouchableOpacity
            style={[
                styles.base,
                sizeStyle.container,
                {
                    backgroundColor: isSelected ? activeBackgroundColor : inactiveBackgroundColor,
                    borderColor: isSelected ? activeBackgroundColor : '#000000',
                    borderWidth: isSelected ? 0 : 1,
                },
                disabled && styles.disabled,
                style,
            ]}
            onPress={onPress}
            disabled={disabled}
            activeOpacity={0.75}
        >
            <View style={styles.contentRow}>
                {icon && <View style={styles.iconWrapper}>{icon}</View>}
                <Text
                    style={[
                        styles.label,
                        sizeStyle.text,
                        { color: isSelected ? activeTextColor : inactiveTextColor },
                        textStyle,
                    ]}
                >
                    {label}
                </Text>
                {badge !== undefined && (
                    <View
                        style={[
                            styles.badge,
                            {
                                backgroundColor: isSelected
                                    ? 'rgba(255, 255, 255, 0.25)'
                                    : theme.colors.primaryLight,
                            },
                        ]}
                    >
                        <Text
                            style={[
                                styles.badgeText,
                                { color: isSelected ? theme.colors.textInverse : theme.colors.textInverse },
                            ]}
                        >
                            {badge}
                        </Text>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    base: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.15,
        shadowRadius: 2,
        elevation: 3,
    },
    disabled: {
        opacity: 0.5,
    },
    contentRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconWrapper: {
        marginRight: 6,
    },
    label: {
        textAlign: 'center',
    },
    badge: {
        marginLeft: 6,
        paddingHorizontal: 6,
        paddingVertical: 1,
        borderRadius: 10,
    },
    badgeText: {
        fontSize: 10,
        fontWeight: 'bold',
    },
});

export default Chip;
