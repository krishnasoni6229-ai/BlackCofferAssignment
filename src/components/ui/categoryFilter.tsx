import React from 'react';
import { StyleSheet, View, FlatList, ViewStyle, StyleProp } from 'react-native';
import Button from '@/src/components/ui/button';
import theme from '@/src/config/theme.config';

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
                renderItem={({ item }) => {
                    const isActive = activeId === item.id;
                    return (
                        <Button
                            id={item.id}
                            title={item.title}
                            size="sm"
                            backgroundColor={isActive ? theme.colors.primary : theme.colors.surface}
                            textColor={isActive ? theme.colors.textInverse : theme.colors.primary}
                            borderColor={isActive ? theme.colors.primary : theme.colors.borderDark}
                            onPress={() => onSelect(item.id)}
                            style={styles.chip}
                            icon={item.icon}
                        />
                    );
                }}
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
