import { ScrollView, StyleSheet, View } from "react-native";
import { FoodCard } from "./FoodCard";

export const FoodCards = ({ foods }) => {
    return (
        <ScrollView className='-z-10' contentContainerStyle={styles.scrollView}>
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        paddingBottom: 32,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
});