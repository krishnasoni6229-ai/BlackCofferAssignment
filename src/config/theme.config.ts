import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Base guidelines based on standard mobile screen width (375pt)
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scale = (size: number) => (SCREEN_WIDTH / guidelineBaseWidth) * size;
export const verticalScale = (size: number) => (SCREEN_HEIGHT / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;

export const isTablet = () => {
    const pixelDensity = PixelRatio.get();
    const adjustedWidth = SCREEN_WIDTH * pixelDensity;
    const adjustedHeight = SCREEN_HEIGHT * pixelDensity;
    if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
        return true;
    }
    return (
        (SCREEN_WIDTH >= 768 && SCREEN_HEIGHT >= 1024) ||
        (SCREEN_WIDTH >= 1024 && SCREEN_HEIGHT >= 768)
    );
};

export const theme = {
    colors: {
        // Brand & Primary
        primary: '#154354',
        primaryDark: '#103540',
        primaryLight: '#226176',
        primaryMuted: '#e8f1f5',

        // Secondary & Accent
        accent: '#348fd9',
        accentLight: '#e6f2fb',
        heart: '#e63946',
        heartLight: '#fde8ea',

        // Backgrounds & Surfaces
        background: '#e8e8e8',
        backgroundAlt: '#e8e8e8',
        surface: '#ffffff',
        surfaceMuted: '#f5f5f5',
        surfaceHighlight: '#f0f4f8',

        // Text colors
        textPrimary: '#111827',
        textSecondary: '#4b5563',
        textMuted: '#888888',
        textInverse: '#ffffff',
        textLink: '#348fd9',

        // Borders & Dividers
        border: '#dddddd',
        borderDark: '#000000',
        borderLight: '#f0f0f0',
        divider: '#e5e7eb',

        // Semantic
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
        info: '#3b82f6',

        // Shadows & Overlays
        overlay: 'rgba(0, 0, 0, 0.5)',
        shadow: '#000000',
    },

    typography: {
        fontFamily: {
            regular: Platform.select({ ios: 'System', default: 'sans-serif' }),
            medium: Platform.select({ ios: 'System', default: 'sans-serif-medium' }),
            bold: Platform.select({ ios: 'System', default: 'sans-serif' }),
        },
        fontSize: {
            xs: 11,
            sm: 13,
            base: 14,
            md: 16,
            lg: 18,
            xl: 20,
            xxl: 24,
            header: 28,
        },
        lineHeight: {
            xs: 14,
            sm: 18,
            base: 20,
            md: 22,
            lg: 24,
            xl: 28,
            xxl: 32,
        },
        fontWeight: {
            regular: '400' as const,
            medium: '500' as const,
            semiBold: '600' as const,
            bold: '700' as const,
        },
    },

    spacing: {
        none: 0,
        xs: 4,
        sm: 8,
        md: 12,
        lg: 16,
        xl: 20,
        xxl: 24,
        xxxl: 32,
        huge: 48,
    },

    borderRadius: {
        none: 0,
        xs: 4,
        sm: 8,
        md: 12,
        lg: 14,
        xl: 20,
        full: 9999,
        pill: 9999,
    },

    shadows: {
        none: {
            shadowColor: 'transparent',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0,
            shadowRadius: 0,
            elevation: 0,
        },
        sm: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
            elevation: 2,
        },
        md: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.15,
            shadowRadius: 4,
            elevation: 4,
        },
        card: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.08,
            shadowRadius: 4,
            elevation: 3,
        },
    },

    layout: {
        maxContentWidth: 550,
        drawerWidth: Math.min(300, SCREEN_WIDTH * 0.8),
        headerHeight: 56,
        tabBarHeight: 60,
    },

    breakpoints: {
        phone: 0,
        tablet: 768,
        desktop: 1024,
    },
};

export type ThemeType = typeof theme;
export default theme;
