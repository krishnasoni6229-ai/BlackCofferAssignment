import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Share,
    useWindowDimensions,
} from 'react-native';
import { Image } from 'expo-image';
import { EvilIcons, FontAwesome, Octicons } from '@expo/vector-icons';
import Button from '@/src/components/ui/button';
import theme from '@/src/config/theme.config';
import { PostCardProps, postCardProps } from '@/src/types';

export type { PostCardProps, postCardProps };

const PostCard: React.FC<PostCardProps> = ({
    id,
    name,
    location,
    imageUrl,
    postDate,
    postContent,
    views,
    discription,
    fullLocation,
    onLikePress,
    onFollowPress,
    onSharePress,
    onCommentPress,
}) => {
    const { width: windowWidth } = useWindowDimensions();
    // Compute exact card width so layout engine never miscalculates percentage widths
    const cardWidth = Math.min(540, Math.max(280, windowWidth - 24));

    const [activeHeart, setActiveHeart] = useState(false);
    const [activeFollower, setActiveFollower] = useState(false);

    const handleLike = () => {
        const nextState = !activeHeart;
        setActiveHeart(nextState);
        if (onLikePress) onLikePress(id, nextState);
    };

    const handleFollow = () => {
        const nextState = !activeFollower;
        setActiveFollower(nextState);
        if (onFollowPress) onFollowPress(id, nextState);
    };

    const handleShare = async () => {
        if (onSharePress) {
            onSharePress({
                id,
                name,
                location,
                imageUrl,
                postDate,
                postContent,
                views,
                discription,
                fullLocation,
            });
            return;
        }

        try {
            await Share.share({
                message: `${name}: ${discription}\n${imageUrl}`,
            });
        } catch {
            // handle error silently
        }
    };

    const handleComment = () => {
        if (onCommentPress) onCommentPress(id);
    };

    return (
        <View style={[styles.mainContainer, { width: cardWidth }]}>
            {/* Header: User Info & Follow Button */}
            <View style={styles.header}>
                <View style={styles.userRow}>
                    <Image
                        source={require('@/assets/icons/user.png')}
                        style={styles.profilePic}
                        contentFit="cover"
                    />
                    <View style={styles.userInfo}>
                        <Text style={styles.userName} numberOfLines={1}>
                            {name}
                        </Text>
                        <Text style={styles.userLocation} numberOfLines={1}>
                            {location}
                        </Text>
                    </View>
                </View>

                <Button
                    title={activeFollower ? 'Following' : 'Follow'}
                    size="sm"
                    backgroundColor={activeFollower ? '#154454' : '#ffffff'}
                    textColor={activeFollower ? '#ffffff' : '#154454'}
                    onPress={handleFollow}
                    style={styles.followBtn}
                />
            </View>

            {/* Post Media Image */}
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: imageUrl }}
                    style={styles.postImage}
                    contentFit="cover"
                    transition={200}
                />
            </View>

            {/* Meta Row: Date & Views */}
            <View style={styles.metaRow}>
                <Text style={styles.metaText}>{postDate}</Text>
                <View style={styles.viewsWrapper}>
                    <Text style={styles.categoryText}>{postContent}</Text>
                    <Text style={styles.metaText}>{views}</Text>
                </View>
            </View>

            {/* Description */}
            <Text style={styles.description} numberOfLines={3}>
                {discription}
            </Text>

            {/* Action Buttons: Like, Share, Comment */}
            <View style={styles.actionsRow}>
                <TouchableOpacity
                    onPress={handleLike}
                    activeOpacity={0.7}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    style={styles.actionBtn}
                >
                    <Octicons
                        size={22}
                        name={activeHeart ? 'heart-fill' : 'heart'}
                        color={activeHeart ? theme.colors.heart : '#154454'}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleShare}
                    activeOpacity={0.7}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    style={styles.actionBtn}
                >
                    <EvilIcons size={28} name="share-google" color="#154454" />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleComment}
                    activeOpacity={0.7}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    style={styles.actionBtn}
                >
                    <EvilIcons size={28} name="comment" color="#154454" />
                </TouchableOpacity>
            </View>

            {/* Location Footer */}
            <View style={styles.locationRow}>
                <FontAwesome size={16} name="location-arrow" color="#154454" />
                <Text style={styles.locationText} numberOfLines={1}>
                    {fullLocation}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 14,
        paddingBottom: 12,
        overflow: 'hidden',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.12,
        shadowRadius: 4,
        elevation: 3,
        borderWidth: 1,
        borderColor: '#e5e7eb',
    },
    header: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        width: '100%',
    },
    userRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        flex: 1,
        minWidth: 0,
        marginRight: 8,
    },
    profilePic: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: '#e5e7eb',
    },
    userInfo: {
        flex: 1,
        minWidth: 0,
        justifyContent: 'center',
    },
    userName: {
        color: '#348fd9',
        fontWeight: '700',
        fontSize: 14,
    },
    userLocation: {
        color: '#6b7280',
        fontSize: 12,
        marginTop: 1,
    },
    followBtn: {
        paddingHorizontal: 16,
        paddingVertical: 6,
    },
    imageContainer: {
        width: '100%',
        height: 240,
        backgroundColor: '#e5e7eb',
    },
    postImage: {
        width: '100%',
        height: '100%',
    },
    metaRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingTop: 10,
        paddingBottom: 4,
    },
    viewsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    categoryText: {
        fontSize: 13,
        color: '#4b5563',
        fontWeight: '600',
    },
    metaText: {
        fontSize: 13,
        color: '#6b7280',
    },
    description: {
        paddingHorizontal: 12,
        paddingTop: 4,
        fontSize: 14,
        color: '#1f2937',
        lineHeight: 20,
    },
    actionsRow: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        marginTop: 10,
        gap: 16,
        alignItems: 'center',
    },
    actionBtn: {
        padding: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    locationRow: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        gap: 8,
        marginTop: 10,
        alignItems: 'center',
    },
    locationText: {
        flex: 1,
        fontSize: 12,
        color: '#4b5563',
    },
});

export default PostCard;
