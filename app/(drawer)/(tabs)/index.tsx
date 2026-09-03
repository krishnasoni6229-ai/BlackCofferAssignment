import React, { useMemo, useState } from 'react';
import { StyleSheet, View, FlatList, StatusBar, Text } from 'react-native';
import PostCard from '@/src/components/ui/postCard';
import CategoryFilter, { CategoryItem } from '@/src/components/ui/categoryFilter';
import { PostData } from '@/src/staticData/postData';
import theme from '@/src/config/theme.config';

const categoryItems: CategoryItem[] = [
    { id: '1', title: 'All' },
    { id: '2', title: 'Entertainment' },
    { id: '3', title: 'Lifestyles' },
    { id: '4', title: 'Sports' },
    { id: '5', title: 'Technology' },
    { id: '6', title: 'Health' },
    { id: '7', title: 'Government' },
    { id: '8', title: 'Business' },
];

const IndexTab: React.FC = () => {
    const [activeId, setActiveId] = useState<string>('1');

    const filteredPosts = useMemo(() => {
        if (activeId === '1') return PostData;
        const categoryTitle = categoryItems.find((btn) => btn.id === activeId)?.title;
        return PostData.filter((post) => post.category === categoryTitle);
    }, [activeId]);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={theme.colors.primaryDark} />

            {/* Category Filter Bar */}
            <CategoryFilter
                categories={categoryItems}
                activeId={activeId}
                onSelect={setActiveId}
            />

            {/* Feed List */}
            <FlatList
                data={filteredPosts}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.cardListContainer}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <PostCard
                        id={item.id}
                        name={item.name}
                        location={item.location}
                        imageUrl={item.imageUrl}
                        postDate={item.postDate}
                        postContent={item.postContent}
                        views={item.views}
                        discription={item.discription}
                        fullLocation={item.fullLocation}
                        category={item.category}
                    />
                )}
                ListEmptyComponent={() => (
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>
                            No posts found in this category.
                        </Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
    cardListContainer: {
        paddingVertical: 10,
        paddingBottom: 24,
        gap: 10,
        alignItems: 'center',
    },
    emptyContainer: {
        padding: 30,
        alignItems: 'center',
    },
    emptyText: {
        color: '#666',
        fontSize: 15,
        textAlign: 'center',
    },
});

export default IndexTab;
