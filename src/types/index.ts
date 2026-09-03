import React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
import { ImageSource } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';

// ==========================================
// 1. Post & Feed Types
// ==========================================
export type PostCategory =
    | 'All'
    | 'Technology'
    | 'Entertainment'
    | 'Lifestyles'
    | 'Sports'
    | 'Health'
    | 'Government'
    | 'Business'
    | string;

export interface PostItem {
    id: string;
    name: string;
    location: string;
    imageUrl: string;
    postDate: string;
    postContent: string;
    views: string;
    discription: string;
    fullLocation: string;
    category?: PostCategory;
    likesCount?: number;
    commentsCount?: number;
    isLiked?: boolean;
    isFollowing?: boolean;
}

export interface PostCardProps extends PostItem {
    onLikePress?: (id: string, isLiked: boolean) => void;
    onFollowPress?: (id: string, isFollowing: boolean) => void;
    onSharePress?: (post: PostItem) => void;
    onCommentPress?: (id: string) => void;
}

// Backward compatibility alias
export type postCardProps = PostCardProps;

// ==========================================
// 2. Category & Filter Types
// ==========================================
export interface CategoryItem {
    id: string;
    title: string;
    icon?: React.ReactNode;
}

export interface CategoryFilterProps {
    categories: CategoryItem[];
    activeId: string;
    onSelect: (id: string) => void;
    containerStyle?: StyleProp<ViewStyle>;
}

// ==========================================
// 3. UI Component Types
// ==========================================
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonPropsItem {
    id?: string;
    title: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    onPress?: () => void;
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
    icon?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    activeOpacity?: number;
}

export type ButtonProps = ButtonPropsItem;

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps {
    source?: string | number | ImageSource;
    name?: string;
    size?: AvatarSize | number;
    borderWidth?: number;
    borderColor?: string;
    style?: StyleProp<ViewStyle>;
}

export interface StatBoxProps {
    value: string | number;
    label: string;
    onPress?: () => void;
    active?: boolean;
    style?: StyleProp<ViewStyle>;
}

export interface EmptyStateProps {
    title?: string;
    description?: string;
    iconName?: keyof typeof Ionicons.glyphMap;
    actionLabel?: string;
    onAction?: () => void;
    style?: StyleProp<ViewStyle>;
}

export interface CustomHeaderProps {
    onSearchPress?: () => void;
    onMenuPress?: () => void;
}

// ==========================================
// 4. User & Profile Types
// ==========================================
export interface UserProfile {
    id: string;
    name: string;
    location: string;
    profession?: string;
    bio?: string;
    avatarUrl?: string;
    coverImageUrl?: string;
    stats: {
        feed: number;
        followers: number;
        following: number;
        blocked: number;
    };
}

export type ProfileTabType = 'drafts' | 'history';

// ==========================================
// 5. Navigation & Layout Types
// ==========================================
export interface TabBarIconProps {
    color: string;
    focused: boolean;
    size: number;
}
