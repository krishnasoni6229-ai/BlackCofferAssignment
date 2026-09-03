import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    ViewStyle,
    TextStyle,
    View,
} from 'react-native';
import theme from '@/src/config/theme.config';
import { ButtonPropsItem, ButtonVariant, ButtonSize } from '@/src/types';

export type { ButtonPropsItem, ButtonVariant, ButtonSize };

const Button: React.FC<ButtonPropsItem> = ({
    title,
    variant = 'primary',
    size = 'md',
    backgroundColor,
    textColor,
    borderColor,
    onPress,
    disabled = false,
    loading = false,
    fullWidth = false,
    icon,
    style,
    textStyle,
    activeOpacity = 0.8,
}) => {
    // Dynamic styles based on variant
    const getVariantStyle = (): ViewStyle => {
        if (backgroundColor) {
            const isWhite = backgroundColor.toLowerCase() === '#fff' || backgroundColor.toLowerCase() === '#ffffff';
            return {
                backgroundColor,
                borderColor: borderColor || (isWhite ? '#000000' : 'transparent'),
                borderWidth: isWhite || borderColor ? 1 : 0,
            };
        }

        switch (variant) {
            case 'secondary':
                return {
                    backgroundColor: theme.colors.accentLight,
                    borderColor: 'transparent',
                    borderWidth: 0,
                };
            case 'outline':
                return {
                    backgroundColor: '#ffffff',
                    borderColor: '#000000',
                    borderWidth: 1,
                };
            case 'ghost':
                return {
                    backgroundColor: 'transparent',
                    borderColor: 'transparent',
                    borderWidth: 0,
                };
            case 'danger':
                return {
                    backgroundColor: theme.colors.danger,
                    borderColor: 'transparent',
                    borderWidth: 0,
                };
            case 'primary':
            default:
                return {
                    backgroundColor: theme.colors.primary,
                    borderColor: 'transparent',
                    borderWidth: 0,
                };
        }
    };

    // Text color based on variant
    const getTextColor = (): string => {
        if (textColor) return textColor;

        switch (variant) {
            case 'secondary':
                return theme.colors.primary;
            case 'outline':
                return theme.colors.primary;
            case 'ghost':
                return theme.colors.textSecondary;
            case 'danger':
            case 'primary':
            default:
                return theme.colors.textInverse;
        }
    };

    // Padding and font sizing
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
                        paddingHorizontal: 28,
                        borderRadius: 24,
                    },
                    text: {
                        fontSize: 16,
                        fontWeight: 'bold',
                    },
                };
            case 'md':
            default:
                return {
                    container: {
                        paddingVertical: 7,
                        paddingHorizontal: 22,
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
    const computedTextColor = getTextColor();

    return (
        <TouchableOpacity
            style={[
                styles.base,
                sizeStyle.container,
                getVariantStyle(),
                fullWidth && styles.fullWidth,
                disabled && styles.disabled,
                style,
            ]}
            onPress={onPress}
            disabled={disabled || loading}
            activeOpacity={activeOpacity}
        >
            {loading ? (
                <ActivityIndicator size="small" color={computedTextColor} />
            ) : (
                <View style={styles.contentRow}>
                    {icon && <View style={styles.iconWrapper}>{icon}</View>}
                    <Text
                        style={[
                            styles.text,
                            sizeStyle.text,
                            { color: computedTextColor },
                            textStyle,
                        ]}
                    >
                        {title}
                    </Text>
                </View>
            )}
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
    fullWidth: {
        width: '100%',
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
        marginRight: 4,
    },
    text: {
        textAlign: 'center',
    },
});

export default Button;
