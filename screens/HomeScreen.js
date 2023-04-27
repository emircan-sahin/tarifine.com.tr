import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FoodCards } from '../components/FoodCards';

export const HomeScreen = ({ navigation }) => {
    return (
        <View className='flex-1 bg-[#0A0A0A] pt-10 px-10'>
            <View className='flex flex-row items-center w-full mx-auto mt-8 border border-[#9FA5C0] rounded-full pl-4'>
                <MaterialIcons name="search" size={24} color={'#9FA5C0'} />
                <TextInput
                    className='flex-1 text-white py-3 px-2'
                    placeholder='Search'
                    placeholderTextColor='#9FA5C0'
                />
            </View>

            {/* Category scroll view */}
            <View className='flex flex-col mt-6'>
                <Text className='text-white text-lg font-semibold'>Category</Text>

                <View className='flex flex-row mt-4 gap-x-4'>
                    <TouchableOpacity className='flex flex-col items-center justify-center px-6 py-3 bg-[#1FCC79] rounded-full'>
                        <Text className='text-black text-base font-bold'>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='flex flex-col items-center justify-center px-6 py-3 bg-white rounded-full'>
                        <Text className='text-black text-base font-bold'>Food</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='flex flex-col items-center justify-center px-6 py-3 bg-white rounded-full'>
                        <Text className='text-black text-base font-bold'>Drink</Text>
                    </TouchableOpacity>
                </View>

                <View className='w-screen h-2 bg-white/5 mt-8 -ml-10'></View>
            </View>

            <FoodCards />
        </View>
    )
}