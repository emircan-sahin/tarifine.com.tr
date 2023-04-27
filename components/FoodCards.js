import { ScrollView, StyleSheet, View } from "react-native"
import { FoodCard } from "./FoodCard"
import { useEffect } from "react";
import react from "react";

export const FoodCards = ({ food, onPress }) => {
    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
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