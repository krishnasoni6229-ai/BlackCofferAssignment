import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    useWindowDimensions,
} from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Button from '@/src/components/ui/button';
import Avatar from '@/src/components/ui/avatar';
import StatBox from '@/src/components/ui/statBox';
import EmptyState from '@/src/components/ui/emptyState';
import theme from '@/src/config/theme.config';
import { ProfileTabType } from '@/src/types';

const ProfileTab: React.FC = () => {
    const { width: windowWidth } = useWindowDimensions();
    const isTabletDevice = windowWidth >= theme.breakpoints.tablet;
    const [activeTab, setActiveTab] = useState<ProfileTabType>('drafts');

    return (
        <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
        >
            <View style={[styles.mainWrapper, isTabletDevice && styles.tabletWrapper]}>
                {/* User Details Card */}
                <View style={styles.card}>
                    <View style={styles.profileHeader}>
                        <Avatar
                            source={require('@/assets/icons/user.png')}
                            name="Krishna Soni"
                            size="xl"
                            borderWidth={3}
                            borderColor={theme.colors.borderLight}
                        />

                        <View style={styles.textContainer}>
                            <View style={styles.nameRow}>
                                <Text style={styles.name} numberOfLines={1}>
                                    Krishna Soni
                                </Text>
                                <Button
                                    title="Edit"
                                    size="sm"
                                    variant="primary"
                                    style={styles.editBtn}
                                />
                            </View>

                            <View style={styles.infoRow}>
                                <FontAwesome size={15} name="location-arrow" color={theme.colors.primary} />
                                <Text style={styles.infoText}>Indore, Madhya Pradesh</Text>
                            </View>

                            <View style={styles.infoRow}>
                                <Ionicons size={16} name="bag-outline" color={theme.colors.primary} />
                                <Text style={styles.infoText}>Coding</Text>
                            </View>
                        </View>
                    </View>

                    {/* Stats & Actions Row */}
                    <View style={styles.connectionsSection}>
                        <Button
                            title="Trash"
                            size="sm"
                            variant="danger"
                            icon={<Ionicons name="trash-outline" size={14} color={theme.colors.textInverse} />}
                            style={styles.trashBtn}
                        />

                        <View style={styles.statsRow}>
                            <StatBox value="0" label="Feed" />
                            <StatBox value="0" label="Followers" />
                            <StatBox value="1" label="Following" />
                            <StatBox value="2" label="Blocked" />
                        </View>
                    </View>
                </View>

                {/* About Me Section Card */}
                <View style={[styles.card, styles.aboutCard]}>
                    <View style={styles.aboutHeader}>
                        <View style={styles.aboutInfoCol}>
                            <Text style={styles.aboutTitle}>About me</Text>
                            <Text style={styles.aboutSubtitle}>Anonymous</Text>
                        </View>

                        <View style={styles.btnRow}>
                            <Button
                                title="Drafts"
                                size="sm"
                                variant={activeTab === 'drafts' ? 'primary' : 'outline'}
                                onPress={() => setActiveTab('drafts')}
                                style={styles.tabBtn}
                            />
                            <Button
                                title="History"
                                size="sm"
                                variant={activeTab === 'history' ? 'primary' : 'outline'}
                                onPress={() => setActiveTab('history')}
                                style={styles.tabBtn}
                            />
                        </View>
                    </View>

                    {/* Post Empty State */}
                    <View style={styles.mediaPostContainer}>
                        <EmptyState
                            title={`No ${activeTab === 'drafts' ? 'Draft' : 'History'} Posts`}
                            description={`You don't have any ${activeTab === 'drafts' ? 'saved drafts' : 'viewing history'} yet.`}
                            iconName={activeTab === 'drafts' ? 'document-text-outline' : 'time-outline'}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    scrollContent: {
        flexGrow: 1,
        padding: theme.spacing.md,
        alignItems: 'center',
        paddingBottom: theme.spacing.xxxl,
    },
    mainWrapper: {
        width: '100%',
        maxWidth: theme.layout.maxContentWidth,
        gap: theme.spacing.md,
    },
    tabletWrapper: {
        paddingTop: theme.spacing.lg,
    },
    card: {
        backgroundColor: theme.colors.surface,
        borderRadius: theme.borderRadius.lg,
        padding: theme.spacing.lg,
        borderWidth: 1,
        borderColor: theme.colors.border,
        ...theme.shadows.card,
    },
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: theme.spacing.md,
    },
    textContainer: {
        flex: 1,
        gap: theme.spacing.xs + 2,
    },
    nameRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name: {
        fontSize: theme.typography.fontSize.lg,
        fontWeight: theme.typography.fontWeight.bold,
        color: theme.colors.textPrimary,
        flex: 1,
        marginRight: theme.spacing.sm,
    },
    editBtn: {
        paddingHorizontal: theme.spacing.lg,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: theme.spacing.xs + 2,
    },
    infoText: {
        fontSize: theme.typography.fontSize.sm,
        color: theme.colors.textSecondary,
        fontWeight: theme.typography.fontWeight.medium,
    },
    connectionsSection: {
        marginTop: theme.spacing.lg,
        paddingTop: theme.spacing.md,
        borderTopWidth: 1,
        borderTopColor: theme.colors.borderLight,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: theme.spacing.sm,
    },
    trashBtn: {
        paddingHorizontal: theme.spacing.md,
    },
    statsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1,
    },
    aboutCard: {
        minHeight: 280,
    },
    aboutHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: theme.spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.borderLight,
        flexWrap: 'wrap',
        gap: theme.spacing.sm,
    },
    aboutInfoCol: {
        flexDirection: 'column',
    },
    aboutTitle: {
        fontSize: theme.typography.fontSize.md,
        fontWeight: theme.typography.fontWeight.bold,
        color: theme.colors.textPrimary,
    },
    aboutSubtitle: {
        fontSize: theme.typography.fontSize.xs,
        color: theme.colors.textMuted,
        marginTop: 2,
    },
    btnRow: {
        flexDirection: 'row',
        gap: theme.spacing.xs,
    },
    tabBtn: {
        paddingHorizontal: theme.spacing.md,
    },
    mediaPostContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 180,
    },
});

export default ProfileTab;
