import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Chip from '@/src/components/ui/chip';
import theme from '@/src/config/theme.config';
import { CategoryItem, CategoryFilterProps } from '@/src/types';

export type { CategoryItem, CategoryFilterProps };

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
    categories,
    activeId,
    onSelect,
    containerStyle,
}) => {
    return (
        <View style={[styles.wrapper, containerStyle]}>
            <FlatList
                data={categories}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.listContainer}
                renderItem={({ item }) => (
                    <Chip
                        id={item.id}
                        label={item.title}
                        size="sm"
                        selected={activeId === item.id}
                        onPress={() => onSelect(item.id)}
                        icon={item.icon}
                        style={styles.chip}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        height: 52,
        width: '100%',
        backgroundColor: theme.colors.backgroundAlt,
        justifyContent: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: theme.colors.border,
    },
    listContainer: {
        flexDirection: 'row',
        paddingHorizontal: theme.spacing.md,
        alignItems: 'center',
        gap: theme.spacing.sm,
    },
    chip: {
        marginRight: theme.spacing.xs,
    },
});

export default CategoryFilter;
